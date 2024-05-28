import React, { useState } from 'react';
import axios from 'axios';

const VideoUploader = () => {
    const [videoLink, setVideoLink] = useState('');
    const [loading, setLoading] = useState(false);
    const [thumbnail, setThumbnail] = useState('');
    const [summary, setSummary] = useState('');
    const [error, setError] = useState('');

    const extractYouTubeTranscript = async (videoId) => {
        try {
            const response = await axios.get(`http://localhost:5000/extract-transcript/${videoId}`);
            return response.data.transcript;
        } catch (error) {
            throw new Error('Failed to fetch YouTube transcript. Please try again.');
        }
    };

    const generateSummary = async (transcript) => {
        try {
            const response = await axios.post('http://localhost:5000/generate-summary', { transcript });
            return response.data.summary;
        } catch (error) {
            throw new Error('Failed to generate summary. Please try again.');
        }
    };

    const handleSubmit = async () => {
        setError('');
        setLoading(true);

        try {
            const videoId = videoLink.split("=")[1];
            const transcript = await extractYouTubeTranscript(videoId);
            const summary = await generateSummary(transcript);
            setSummary(summary);
            setThumbnail(`http://img.youtube.com/vi/${videoId}/0.jpg`);
            // Save summary to file
            await saveSummaryToFile(videoId, summary);
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        }

        setLoading(false);
    };

    const saveSummaryToFile = async (videoId, summary) => {
        try {
            const filename = `files/${videoId}.txt`;
            await axios.post('http://localhost:5000/save-summary', { filename, summary });
        } catch (error) {
            console.error('Error saving summary:', error);
        }
    };

    return (
        <div className="video-uploader">
            <h2>YouTube Video Summarizer</h2>
            <div className="center">
                <div className="input-group">
                    <label htmlFor="video-link">YouTube Video Link:</label>
                    <input 
                        type="text" 
                        id="video-link" 
                        value={videoLink} 
                        onChange={e => setVideoLink(e.target.value)} 
                        placeholder="Enter YouTube video link" 
                    />
                </div>
                <button onClick={handleSubmit} disabled={loading || !videoLink.trim()}>
                    {loading ? 'Processing...' : 'Process Video'}
                </button>
            </div>
            {thumbnail && (
                <div className="thumbnail-container">
                    <img src={thumbnail} alt="Video Thumbnail" />
                </div>
            )}
            {summary && (
                <div className="summary">
                    <h3>Summary</h3>
                    <p>{summary}</p>
                </div>
            )}
        </div>
    );
};

export default VideoUploader;
