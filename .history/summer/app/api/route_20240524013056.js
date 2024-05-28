import { NextResponse } from 'next/server'
import { Client } from '@octo'
export const POST = async(req) => {
    const body = await req.json()
    console.log("body: ",body);

    return NextResponse.json({
        success:true,
        message: 'hi',
        summary: body.text
    })
}