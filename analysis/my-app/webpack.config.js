const path = require('path');

module.exports = {
  // Your other webpack configuration options...
  
  resolve: {
    fallback: {
      path: require.resolve("path-browserify")
    }
  }
};
