import { NextRequest, NextResponse } from "next/server";

//POST
export async function POST(request:NextRequest) {
    try {
        const response = await request.json()
        console.log(response)
        return NextResponse.json({
            data:response,
            error:"null",
            message:"created successfully"
        },{
            status:201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"failed to create category",
        },{
            status:201
        })
    }
    
}
