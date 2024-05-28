import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [videoSource, setVideoSource] = useState('');
  const [language, setLanguage] = useState('en-US');
  const [videoLink, setVideoLink] = useState('');
  const [localVideoFile, setLocalVideoFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleProcessVideo = async () => {
    setError('');
    setProcessing(true);

    try {
      let transcriptText = '';
      let videoId = '';

      if (videoSource === 'YouTube URL') {
        videoId = videoLink.split("=")[1];
        transcriptText = await extractYoutubeTranscript(videoId);
        setThumbnailUrl(`http://img.youtube.com/vi/${videoId}/0.jpg`);
      } else if (videoSource === 'Local File' && localVideoFile) {
        const formData = new FormData();
        formData.append('file', localVideoFile);
        const response = await axios.post('http://localhost:5000/upload-video', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        videoId = response.data.videoId;
        transcriptText = response.data.transcript;
        setThumbnailUrl(response.data.thumbnailUrl);
      } else {
        throw new Error('Invalid video source or missing input.');
      }

      const summary = await generateSummary(transcriptText);
      setSummary(summary);

      await saveSummaryAndThumbnail(summary, thumbnailUrl, videoId);

      setProcessing(false);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to process video. Please try again.');
      setProcessing(false);
    }
  };

  const extractYoutubeTranscript = async (videoId) => {
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

  const saveSummaryAndThumbnail = async (summary, thumbnailUrl, videoId) => {
    // Implement saving summary and thumbnail
  };

  return (
    <div className="App">
      <h1>YouTube/Local Video Transcript Summarizer</h1>
      <div className="input-group">
        <label htmlFor="video-source">Select Video Source:</label>
        <select id="video-source" value={videoSource} onChange={(e) => setVideoSource(e.target.value)}>
          <option value="">Select</option>
          <option value="YouTube URL">YouTube URL</option>
          <option value="Local File">Local File</option>
        </select>
      </div>
      {videoSource === 'YouTube URL' && (
        <div className="input-group">
          <label htmlFor="video-link">Enter YouTube Video Link:</label>
          <input type="text" id="video-link" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} />
        </div>
      )}
      {videoSource === 'Local File' && (
        <div className="input-group">
          <label htmlFor="file-upload">Upload Local Video File:</label>
          <input type="file" id="file-upload" accept=".mp4,.mkv,.avi,.mov" onChange={(e) => setLocalVideoFile(e.target.files[0])} />
        </div>
      )}
      <div className="input-group">
        <label htmlFor="language">Select Language:</label>
        <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en-US">English</option>
          <option value="te-IN">Telugu</option>
          <option value="hi-IN">Hindi</option>
        </select>
      </div>
      <button onClick={handleProcessVideo} disabled={processing || !videoSource}>
        {processing ? 'Processing...' : 'Process Video'}
      </button>
      {error && <p className="error">{error}</p>}
      {summary && (
        <div>
          <h2>Summary</h2>
          <p>{summary}</p>
        </div>
      )}
      {thumbnailUrl && (
        <div>
          <h2>Thumbnail</h2>
          <img src={thumbnailUrl} alt="Video Thumbnail" />
        </div>
      )}
    </div>
  );
}

export default App;
