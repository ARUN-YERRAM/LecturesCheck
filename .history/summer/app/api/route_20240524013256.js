import { NextResponse } from 'next/server'
import { Client } from '@octoai/client';

const client = bew Client(process.env.)

export const POST = async(req) => {
    const body = await req.json()
    console.log("body: ",body);

    return NextResponse.json({
        success:true,
        message: 'hi',
        summary: body.text
    })
}