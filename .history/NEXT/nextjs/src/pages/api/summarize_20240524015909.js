import { Client } from "@octoai/client";

const client = new Client(process.env.OCTOAI_TOKEN);

export default async function handler(req, res) {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text to summarize is missing" });
    }

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

    if (completion?.choices?.[0]?.message?.content) {
      return res.status(200).json({ summary: completion.choices[0].message.content });
    } else {
      return res.status(500).json({ error: "No completion message received" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}