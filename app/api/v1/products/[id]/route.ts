import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

//GET SINGLE
export async function GET(request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    try {
        const {id} = await params
        const singleProduct = await db.product.findUnique({
            where:{
                id
            }
        })
    return NextResponse.json({
        data:singleProduct,
        message:"fetched",
        error:null
    },{
        status:200
    })
    } catch (error) {
        console.log(error)
    }
    
}

//update
export async function PUT(request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    try {
        const {id} = await params
    const data = await request.json()
    const updatedProduct = await db.product.update({
        where:{
            id
        },
        data
    })
    return NextResponse.json({
        data:updatedProduct,
        message:"updated",
        error:null
    },{
        status:200
    })
    } catch (error) {
        console.log(error)
    }
    
}

//delete
export async function DELETE(request:NextRequest,{params}:{params:Promise<{id:string}>}) {
    try {
        const {id} = await params
    await db.product.delete({
        where:{
            id
        }
    })
    return NextResponse.json({
        message:"deleted",
        error:null
    },{
        status:200
    })
    } catch (error) {
        console.log(error)
    }
    
}