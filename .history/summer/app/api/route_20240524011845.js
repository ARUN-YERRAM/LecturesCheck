import {NextResponse} from 'next/server'

export const POST = async(req) => {

    return NextResponse.json({
        success:true,
        message: 'hi'})
}