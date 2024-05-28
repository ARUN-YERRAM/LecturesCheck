import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const VideoUploader = () => {
    const [videoLink, setVideoLink] = useState('');
    const [loading, setLoading] = useState(false);
    const [thumbnail, setThumbnail] = useState('');
    const [summary, setSummary] = useState('');
    const [error, setError] = useState('');

    const extractYouTubeTranscript = async (videoLink) => {
        try {
            const videoId = videoLink.split("=")[1];
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
            const transcript = await extractYouTubeTranscript(videoLink);
            const summary = await generateSummary(transcript);
            setSummary(summary);
            setThumbnail(`http://img.youtube.com/vi/${videoLink.split("=")[1]}/0.jpg`);
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        }

        setLoading(false);
    };

    return (

        <>
        <div className="video-uploader">
            <h2>YouTube Video Summarizer</h2>
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
            {error && <p className="error">{error}</p>}
            <button onClick={handleSubmit} disabled={loading || !videoLink.trim()}>
                {loading ? 'Processing...' : 'Process Video'}
            </button>
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

        </>
    );
};

export default VideoUploader;
