// videoSummarizer.js
const prompts = require('prompts');
const fs = require('fs');
const { Client } = require("@octoai/client");

require('dotenv').config();

// Check if the environment variable is set
if (!process.env.OCTOAI_TOKEN) {
    console.log('No OctoAI API key found. Please set your OCTOAI_TOKEN in the .env file.');
    return;
}

// Connect to the OctoAI Client
const octoaiClient = new Client(process.env.OCTOAI_TOKEN);

// Run the script in an async function
(async () => {
    try {
        // Let the user input the path to the audio file
        const response = await prompts({
            type: 'text',
            name: 'audioFilePath',
            message: 'Enter the path to the audio file (MP3 format):',
        });

        // Read the audio file
        const audioFilePath = response.audioFilePath;
        const audioFile = fs.readFileSync(audioFilePath);

        // Perform speech-to-text conversion using OctoAI
        const transcription = await octoaiClient.speechToText(audioFile);

        // Display the transcription
        console.log('Transcription:');
        console.log(transcription);
    } catch (error) {
        console.error('Error:', error);
    }
})();
