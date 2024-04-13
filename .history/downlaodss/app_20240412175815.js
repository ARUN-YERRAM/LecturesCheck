const { exec } = require('child_process');
const fs = require('fs');

// Function to download YouTube video
const downloadVideo = (videoUrl, outputFilePath) => {
    return new Promise((resolve, reject) => {
        // Command to download the video
        const command = `youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/bestvideo+bestaudio' --merge-output-format mp4 -o '${outputFilePath}' ${videoUrl}`;

        // Execute the command
        const childProcess = exec(command);

        // Capture output
        childProcess.stdout.on('data', (data) => {
            console.log(data);
        });

        childProcess.stderr.on('data', (data) => {
            console.error(data);
        });

        // Handle completion
        childProcess.on('close', (code) => {
            if (code === 0) {
                console.log('Download completed successfully');
                resolve();
            } else {
                console.error(`Download failed with code ${code}`);
                reject(new Error(`Download failed with code ${code}`));
            }
        });
    });
};

// Usage example
const videoUrl = 'https://www.youtube.com/embed/Gxe-9Evy4C8';
const outputFilePath = 'C:\Users\Yerram Abhilash\OneDrive\Documents\ArDocs';

downloadVideo(videoUrl, outputFilePath)
    .then(() => {
        console.log('Video downloaded successfully');
    })
    .catch((error) => {
        console.error('Error downloading video:', error);
    });
