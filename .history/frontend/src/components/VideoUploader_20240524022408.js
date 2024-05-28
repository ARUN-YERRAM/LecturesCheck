// VideoUploader.js
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const VideoUploader = () => {
    const [videoLink, setVideoLink] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/process-video', { youtubeLink: videoLink });
            console.log(response.data);
            // Handle response, display summary, etc.
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };
    return (
        <>
            

            <input type="text" value={videoLink} onChange={e => setVideoLink(e.target.value)} />
            <button onClick={handleSubmit}>Upload Video</button>
        </>
    );
};

export default VideoUploader;


