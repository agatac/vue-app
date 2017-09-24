const path = require('path');

module.exports = {
  entry: './src/main',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          vue: {
            loaders: {
              js: 'babel',
            },
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ],
  }
}
