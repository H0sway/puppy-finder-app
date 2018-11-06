// Import dependencies
const path = require('path');
// Handles scss files
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
// Spits out an index.html file in the build
const HtmlWebPackPlugin = require('html-webpack-plugin');

// Configure webpack
const config = {
  entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin({filename: 'style.css'})
  ]
};

module.exports = config;
