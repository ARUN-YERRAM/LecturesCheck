resolve: {
    fallback: {
      "fs": false, '
      "path": false, // or require.resolve("stream-browserify") for 'stream'
      "stream": false
    }
  }
  