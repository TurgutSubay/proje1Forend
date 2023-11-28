const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './build/index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};