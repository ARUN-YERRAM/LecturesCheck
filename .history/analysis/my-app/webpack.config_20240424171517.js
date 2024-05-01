resolve: {
    fallback: {
      "fs": false, // or require.resolve("path-browserify") for 'path'
      "path": false, // or require.resolve("stream-browserify") for 'stream'
      "stream": false
    }
  }
  