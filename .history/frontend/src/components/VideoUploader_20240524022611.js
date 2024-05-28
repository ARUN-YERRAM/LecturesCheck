import React, { useState } from 'react';
import axios from 'axios';

const VideoUploader = () => {
    const [videoLink, setVideoLink] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        setError('');
        setLoading(true);
        
        try {
            const response = await axios.post('http://localhost:5000/process-video', { youtubeLink: videoLink });
            console.log(response.data);
            // Handle response, display summary, etc.
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to upload video. Please try again.');
        }

        setLoading(false);
    };

    return (
        <div className="video-uploader">
            <h2>Upload Video</h2>
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
                {loading ? 'Uploading...' : 'Upload Video'}
            </button>
        </div>
    );
};

export default VideoUploader;
