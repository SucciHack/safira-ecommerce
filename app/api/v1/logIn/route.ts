import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import bycrpt from 'bcrypt'
import { createSession } from "@/lib/session";

//POST
export async function POST(request:NextRequest) {
    try {
       const data = await request.json()
       const {password,email} = data
    const existingUser = await db.user.findUnique({
        where:{
            email
        }
    })
if(!existingUser){
    return NextResponse.json({
        data:null,
        error:"wrong credentials"
    },{status:403})
}
await createSession(existingUser)

const isCorrectPassword = await bycrpt.compare(password,existingUser.password)

if(!isCorrectPassword){
    return NextResponse.json({
        data:null,
        error:"wrong credentials"
    },{status:403})
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {password:removedPassword,...others} = existingUser
return NextResponse.json({
    data:others,
    message:"LoggedIn"
},{status:200})
   } catch (error) {
    console.log(error)
    return NextResponse.json({
        error:"something went wrong",
        data:null
    },{status:500})
   }
}