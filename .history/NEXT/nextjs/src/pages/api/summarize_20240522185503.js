import { Client } from "@octoai/client";

const client = new Client(process.env.OCTOTOKEN);

export default async function handler(req, res) {
  try {
    const body = JSON.parse(req.body);
    console.log(body.text);

    if (!body.text) {
      return res.status(400).json({ error: "Text to summarize is missing" });
    }

    const completion = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Summarize the following text: ${body.text}`,
        },
      ],
      model: "mixtral-8x7b-instruct-fp16",
      presence_penalty: 0,
      temperature: 0.1,
      top_p: 0.9,
    });

    if (completion.choices && completion.choices.length > 0) {
      return res.status(200).json({ message: completion.choices[0].message });
    } else {
      return res.status(500).json({ error: "No completion message received" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
