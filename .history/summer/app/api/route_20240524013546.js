import { NextResponse } from 'next/server'
import { Client } from '@octoai/client';

const client = new Client(process.env.OCTOAI_TOKEN)



export const POST = async(req) => {
    const body = await req.json()
    console.log("body: ",body);

    const completion = await client.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `Summarize the following text: ${text}`,
          },
        ],
        model: "mixtral-8x7b-instruct-fp16",
        presence_penalty: 0,
        temperature: 0.1,
        top_p: 0.9,
      });
  
    

    return NextResponse.json({
        success:true,
        message: 'hi',
        summary: body.text
    })
}