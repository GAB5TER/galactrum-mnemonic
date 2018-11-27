const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    library: 'galactrumMnemonic',
    path: path.resolve(__dirname, 'dist'),
    filename: 'galactrum-mnemonic.js'
  }
};
