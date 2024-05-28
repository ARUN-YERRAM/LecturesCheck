import {NextResponse} from 'next/server'

export const GET = async(req) => {

    return NextResponse.json({
        success:true,
        message: 'hi'})
}