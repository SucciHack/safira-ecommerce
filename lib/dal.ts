"use server"

import { cookies } from "next/headers"
import { cache } from "react"
import { decrypt } from "./session"
import { db } from "@/prisma/db"

export type AuthorisedUser= {
    email:string
    phone:string
}
//get session function
export const getSession = cache(async ()=>{
    const cookieStore = await cookies()
    const cookie = cookieStore.get("payloadSession")?.value
    const session = await decrypt(cookie)

    //check validity of the session
    if(!session){
        return null
    }
    //create id that you will use
    const id = session.userId as string
    try {
        const user = await db.user.findUnique({
            where:{
                id
            }
        })
        return user as AuthorisedUser
    } catch (error) {
        console.log(error)
        return null
    }
})