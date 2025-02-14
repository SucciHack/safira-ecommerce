import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

//POST
export async function POST(request:NextRequest) {
    try {
        const data = await request.json()
    const newProduct = await db.product.create({
        data
    })
    return NextResponse.json({
        data:newProduct,
        message:"fetched",
        error:null
    },{
        status:201
    })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            message:"failed to fetch",
        },{
            status:500
        })
    }
}

//GET
export async function GET() {
    try {
        const data = await await db.product.findMany()
        return NextResponse.json({
            data,
            message:"fetched",
            error:null
        },{
            status:201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            message:"failed to fetch",
        },{
            status:500
        })
    }
}