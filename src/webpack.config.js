const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'xeokit-react.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  options: { presets: ['@babel/env','@babel/preset-react'] },
  externals: [{ react: 'commonjs react' }, /^xeokit-sdk\/.+$/],
};
