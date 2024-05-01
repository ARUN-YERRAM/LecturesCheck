import React, { useState } from 'react';
import axios from 'axios';
require('dotenv').config();
const summarize = require('summarize');

// Function to fetch YouTube transcript data
const fetchTranscript = async (videoUrl) => {
    try {
        const videoId = videoUrl.split('=')[1];
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        const transcriptResponse = await axios.get(`https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        const transcriptText = transcriptResponse.data.items[0].snippet.title; // Assuming transcript is available in the title
        return transcriptText;
    } catch (error) {
        throw error;
    }
};

// Function to generate summary using the 'summarize' library
const generateSummary = async (transcriptText) => {
    try {
        // Generate summary with the 'summarize' library
        const summary = summarize(transcriptText, { maxParagraphs: 3 }); // Example: Generating a summary with a maximum of 3 paragraphs
        return summary;
    } catch (error) {
        throw error;
    }
};

const analyze = () => {
    const [videoUrl, setVideoUrl] = useState('');
const [summary, setSummary] = useState('');

    

    const handleSubmit = async () => {
        try {
            const transcriptText = await fetchTranscript(videoUrl);
            const summary = await generateSummary(transcriptText);
            setSummary(summary);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div>
            <h1>YouTube Transcript to Detailed Notes Converter</h1>
            <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Enter YouTube Video Link"
            />
            <button onClick={handleSubmit}>Get Detailed Notes</button>
            {summary && (
                <div>
                    <h2>Detailed Notes:</h2>
                    <p>{summary}</p>
                </div>
            )}
        </div>
    );
};

export default analyze;
