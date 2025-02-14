import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import bycrypt from "bcrypt"

//POST
export async function POST(request:NextRequest) {
    try {
            const data = await request.json()
            const {email, password,fullName,
            phone,
            image,} = data
            const existingUser = await db.user.findUnique({
                where:{
                    email
                }
            })
        if(existingUser){
            return NextResponse.json({
                data:null,
                error:"user already exists",
            },{
                status:409
            })
        }
        const hashedPassword = await bycrypt.hash(password,10)

        const newUser = await db.user.create({
            data:{
                email,
                password: hashedPassword,
                fullName,
                phone,
                image,
            }
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {password:removedPassword, ...others} = newUser
        return NextResponse.json({
            data:others,
            error:null,
            message:"created successfully"
        },{
            status:201
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"failed to create user",
        },{
            status:500
        })
    }
}

