import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req : NextRequest) {
    try {
        const {postId} = await req.json();
        if(!postId) {
            return NextResponse.json({
                message : "Post Id is missing"
            }, {status : 400})
        }

        await prisma.post.delete({
            where : {
                id : postId
            }
        })

        return NextResponse.json({
            message : "Post Successfully Deleted"
        }, { status : 200})
    } catch (error) {
        return NextResponse.json({
            message : "Internal Server Error"
        }, { status : 500})
    }
}