
require('dotenv').config();
const { Client } = require("@octoai/client");
const prompts = require('prompts');
prompts.override(require('yargs').argv);

const client = new Client(process.env.OCTOAI_TOKEN);

(async () => {
    try {
        const examplePrompt = await prompts({
            type: 'text',
            name: 'value',
            message: 'What is your name?'
        });
        console.log('User name:', examplePrompt.value);
        
        const completion = await client.chat.completions.create({
            "model": "llama-2-13b-chat-fp16",
            "messages": [
                {
                    "role": "system",
                    "content": "Hello, I'm a friendly assistant."
                },
                {
                    "role": "user",
                    "content": "What is the capital of India?"
                }
            ]
        });
        console.log('OctoAI response:', completion.choices[0].message.content);
    } catch (error) {
        console.error('Error:', error);
    }
})();
