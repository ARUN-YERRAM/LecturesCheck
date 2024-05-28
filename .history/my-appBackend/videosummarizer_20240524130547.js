// videoSummarizer.js
const prompts = require('prompts');
const path = require('path');
const fs = require('fs/promises');
const { Client } = require("@octoai/client");
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

require('dotenv').config();

// Check if the environment variable is set
if (!process.env.OCTOAI_TOKEN || !process.env.IBM_SPEECH_TO_TEXT_APIKEY || !process.env.IBM_SPEECH_TO_TEXT_URL) {
    console.log('One or more required environment variables are missing. Please check your .env file.');
    return;
}

// Connect to the OctoAI Client
const octoaiClient = new Client(process.env.OCTOAI_TOKEN);

// Create Speech to Text client
const speechToTextClient = new SpeechToTextV1({
    authenticator: new IamAuthenticator({
        apikey: process.env.IBM_SPEECH_TO_TEXT_APIKEY,
    }),
    serviceUrl: process.env.IBM_SPEECH_TO_TEXT_URL,
});

// Run the script in an async function
(async () => {
    try {
        // List all available models
        let modelsList = await octoaiClient.chat.listAllModels();
        let models = modelsList.map(model => ({
            title: model,
            value: model
        }));

        // Let the user pick a model
        const modelSelected = await prompts({
            type: 'select',
            name: 'model',
            message: 'Pick a model from OctoAI',
            choices: models,
            initial: 0
        });

        // If no model is selected, throw an error
        if (!modelSelected.model) {
            console.log('No model selected. Please try again.');
            return;
        }

        // Get all the video files in the public/videos folder
        let allFiles = await fs.readdir('./public/videos');
        let videos = allFiles.filter(file => ['.mp4', '.mkv', '.avi', '.mov'].includes(path.extname(file).toLowerCase()));

        // If the folder public/videos has no video file extensions, throw an error
        if (videos.length === 0) {
            console.log('No video files found in ./public/videos folder. Please add some videos and try again.');
            return;
        }

        // Map all the videos to an object with a title and value
        let choices = videos.map(video => ({
            title: video,
            value: video
        }));

        // Let the user pick a video to summarize
        const videoSelected = await prompts({
            type: 'select',
            name: 'filename',
            message: 'Pick a video to summarize',
            choices,
        });

        // If no video selected, throw an error
        if (!videoSelected.filename) {
            console.log('No video selected. Please try again.');
            return;
        }

        // Add the path to the videoSelected object
        videoSelected.path = `./public/videos/${videoSelected.filename}`;

        // Extract text from the video using speech-to-text
        const params = {
            audio: fs.createReadStream(videoSelected.path),
            contentType: 'audio/mp3',
        };

        const speechRecognitionResults = await speechToTextClient.recognize(params);
        const text = speechRecognitionResults.result.results.map(result => result.alternatives[0].transcript).join(' ');

        // Perform summarization using the selected model and extracted text
        // Example: Use AI to summarize the text

        // Generate the summary text (placeholder for actual summarization)
        let summary = "This is a placeholder summary text.";

        // Write the summary to a text file
        const summaryFilePath = `./public/files/${videoSelected.filename.replace(path.extname(videoSelected.filename), '')}_summary.txt`;
        await fs.mkdir(path.dirname(summaryFilePath), { recursive: true }); // Create directory if it doesn't exist
        await fs.writeFile(summaryFilePath, summary);
        console.log(`Summary saved to ${summaryFilePath}`);

    } catch (error) {
        console.error('Error:', error);
    }
})();
