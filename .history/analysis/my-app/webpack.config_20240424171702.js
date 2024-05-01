const path = require('path');

module.exports = {
  // Your other webpack configuration options...
  
  resolve: {
    fallback: {
      fs: false,
      path: false,
      stream: false
    }
  }
};
