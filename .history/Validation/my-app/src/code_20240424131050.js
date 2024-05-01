js code:

const ffmpeg = require('fluent-ffmpeg');

const inputVideo = 'video.mp4';

const outputAudio = 'output.mp3';

const convertVideoToAudio = () js code:

const ffmpeg = require('fluent-ffmpeg');

const inputVideo = 'video.mp4';

const outputAudio = 'output.mp3';

const convertVideoToAudio = () => {
    ffmpeg(inputVideo)
        .noVideo() // no video output
        .audioCodec('libmp3lame') // library that converts to mp3
        .save(outputAudio)
        .on('end', () => {
            console.log('Conversion complete');
        })
        .on('error', (err) => {
            console.error('Error converting video to audio:', err);
        });
};

convertVideoToAudio();=> {
    ffmpeg(inputVideo)
        .noVideo() // no video output
        .audioCodec('libmp3lame') // library that converts to mp3
        .save(outputAudio)
        .on('end', () => {
            console.log('Conversion complete');
        })
        .on('error', (err) => {
            console.error('Error converting video to audio:', err);
        });
};

convertVideoToAudio();