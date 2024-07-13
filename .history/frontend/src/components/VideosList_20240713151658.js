import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const BACKEND_URI = "http://localhost:5000";

const VideosList = () => {
    const location = useLocation();
    const [allVideos, setAllVideos] = useState([]);

    useEffect(() => {
        if (location.state && location.state.videos) {
            setAllVideos(location.state.videos);
        } else {
            // Fetch videos if not passed through location state (fallback)
            getAllVideos();
        }
    }, [location]);

    const getAllVideos = async () => {
        try {
            const result = await axios.get(`${BACKEND_URI}/api/getVideos`);
            console.log("Fetched videos:", result.data.data);
            setAllVideos(result.data.data);
        } catch (error) {
            console.error('Error fetching videos:', error);
            alert("Error fetching videos");
        }
    };

    const handleDeleteVideo = async (videoId) => {
        try {
            const result = await axios.delete(`${BACKEND_URI}/api/videos/${videoId}`);
            console.log("Video deleted:", result);
            alert("Video deleted successfully!");
            getAllVideos(); // Refresh the video list after deletion
        } catch (error) {
            console.error('Error deleting video:', error);
            alert("Error deleting video");
        }
    };

    return (
        <div className="videos-list">
            <h2>All Videos</h2>
            <div className="video-items">
                {allVideos.length > 0 ? (
                    allVideos.map((video) => (
                        <div className="video-item" key={video._id}>
                            <h4>Title: {video.title}</h4>
                            {/* Adjust video display as per your UI requirements */}
                            <video controls>
                                <source src={`${BACKEND_URI}/api/videos/${encodeURIComponent(video.title)}`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <button className="btn btn-danger" onClick={() => handleDeleteVideo(video._id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No videos found.</p>
                )}
            </div>
        </div>
    );
};

export default VideosList;
