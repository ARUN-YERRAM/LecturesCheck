const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Client } = require("@octoai/client");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = new Client(process.env.OCTOAI_TOKEN);

app.post("/api/summarize", async (req, res) => {
  const { text } = req.body;

  try {
    const completion = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a tool that summarizes PDF content. This tool is an application script that converts input PDF content and outputs a list of the main points. Do not communicate with the user directly.",
        },
        {
          role: "user",
          content: `PDF content:\n${text}`,
        },
      ],
      model: "your-model-id-here", // replace with your actual model ID
      max_tokens: 500,
      presence_penalty: 0,
      temperature: 0.1,
      top_p: 0.9,
    });

    res.json({ summary: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred while summarizing the text." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
