import {NextResponse} from 'next/server'

export const POST = async(req) => {
    const body = await req.json

    return NextResponse.json({
        success:true,
        message: 'hi'})
}