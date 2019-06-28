const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ],
  },
  output: {
    library: 'galactrumMnemonic',
    path: path.resolve(__dirname, 'dist'),
    filename: 'orecore-mnemonic.js'
  }
};
