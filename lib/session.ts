import"server-only"
import { jwtVerify, SignJWT } from "jose"
import { User } from "@prisma/client"
import { cookies } from "next/headers"

//create a secretKey
const secretKey = process.env.SESSION_KEY
const encodedKey = new TextEncoder().encode(secretKey)

//create types for the PayLoadData
export type PayloadData = {
    userId:string
    email:string | null
    phone:string |null
    image:string |null
    expiresAt:Date
}

//function to encrypt the payload
export async function encrypt(payload:PayloadData) {
    return new SignJWT(payload)
    .setProtectedHeader({alg:"HS256"})
    .setIssuedAt()
    .setExpirationTime("3d")
    .sign(encodedKey)
}

//function to decrypt the payload
export async function decrypt(session:string | undefined="") {
    try {
        const {payload} = await jwtVerify(session,encodedKey,{algorithms:["HS256"]})
        return payload
    } catch (error) {
        console.log(error)
    }
}

//function to create the session
export async function createSession(user:User) {
    //create when the session will expire
    const expiresAt = new Date(Date.now() + 3*24*60*60*1000)

    //give the payLoad the real data from the db
    const payload = {
        userId:user.id,
        name:user.fullName,
        email:user.email,
        phone:user.phone,
        image:user.image,
        expiresAt:expiresAt
    }
    //await the encrypted data to create the session
    const session = await encrypt(payload)

    //create a cookieStore and await cookies
    const cookieStore  = await cookies()
    //store the session to cookies
    cookieStore.set("payloadSession", session,{
        httpOnly:true,
        secure:true,
        expires:expiresAt,
        sameSite:"lax",
        path:"/"
    })
}

//update the session
//no parameters passed
export async function updateSession() {
    //await the cookies
    const cookieStore = await cookies()
    const session = cookieStore.get("payloadSession")?.value

    //decrypt the payload to use it
    const payload = await decrypt(session)
    //check if session & payload exist
    if(!session || !payload){
        return null
    }

    //set the payload in cookieStorage again
    const expiresAt = new Date(Date.now() + 3*24*60*60*1000)
    cookieStore.set("payloadSession", session,{
        httpOnly:true,
        secure:true,
        expires:expiresAt,
        sameSite:"lax",
        path:"/"
    })
}

//delete the session
//no parameters passed
export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete("session")
}
