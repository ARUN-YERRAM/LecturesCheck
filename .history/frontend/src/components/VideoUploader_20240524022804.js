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

    const handleSubmit = async () => {
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/process-video', { youtubeLink: videoLink });
            const { thumbnailUrl, summary } = response.data;
            setThumbnail(thumbnailUrl);
            setSummary(summary);
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to upload video. Please try again.');
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
