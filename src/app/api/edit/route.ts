import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req : NextRequest) {
try {
    const { postId, title, content} = await req.json();

    await prisma.post.update({
        where : {
            id : postId
        },
        data : {
            content,
            title
        }
    })

    return NextResponse.json({
        message : "Post Successfully Updated"
    }, {status : 200})
} catch (error) {
    return NextResponse.json({
        message : "Internal Server Error"
    }, { status : 500})
}

}