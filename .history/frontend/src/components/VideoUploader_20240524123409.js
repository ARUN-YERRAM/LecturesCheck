// frontend/src/App.js
import React, { useState } from 'react';
// import './App.css';

function VideoUploader() {
  const [videoSource, setVideoSource] = useState('YouTube URL');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [localVideoFile, setLocalVideoFile] = useState(null);
  const [languageCode, setLanguageCode] = useState('en-US');
  const [summary, setSummary] = useState('');

  const handleSummarizeVideo = async () => {
    const formData = new FormData();
    formData.append('video_source', videoSource);
    formData.append('youtube_link', youtubeLink);
    formData.append('local_video_file', localVideoFile);
    formData.append('language_code', languageCode);

    try {
      const response = await fetch('http://localhost:6000/summarize_video', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>YouTube/Local Video Transcript to Detailed Notes Converter</h1>
      <div>
        <label>
          Select Video Source:
          <select value={videoSource} onChange={(e) => setVideoSource(e.target.value)}>
            <option value="YouTube URL">YouTube URL</option>
            <option value="Local File">Local File</option>
          </select>
        </label>
      </div>
      {videoSource === 'YouTube URL' && (
        <div>
          <label>
            Enter YouTube Video Link:
            <input type="text" value={youtubeLink} onChange={(e) => setYoutubeLink(e.target.value)} />
          </label>
        </div>
      )}
      {videoSource === 'Local File' && (
        <div>
          <label>
            Upload Local Video File:
            <input type="file" onChange={(e) => setLocalVideoFile(e.target.files[0])} />
          </label>
        </div>
      )}
      <div>
        <label>
          Select Language:
          <select value={languageCode} onChange={(e) => setLanguageCode(e.target.value)}>
            <option value="en-US">English</option>
            <option value="te-IN">Telugu</option>
            <option value="hi-IN">Hindi</option>
          </select>
        </label>
      </div>
      <button onClick={handleSummarizeVideo}>Summarize Video</button>
      {summary && (
        <div>
          <h2>Detailed Notes:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default VideoUploader;
