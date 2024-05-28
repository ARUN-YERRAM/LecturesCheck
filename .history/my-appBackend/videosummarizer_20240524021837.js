// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { extractYoutubeTranscript, generateGeminiContent } = require('./utils'); // Implement these functions

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/process-video', async (req, res) => {
    try {
        const { youtubeLink } = req.body;
        // Extract transcript
        const transcript = await extractYoutubeTranscript(youtubeLink);
        // Generate summary
        const summary = await generateGeminiContent(transcript);
        // Send response
        res.json({ summary });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
