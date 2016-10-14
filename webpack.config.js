var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve('./public/dist'),
    filename: "app.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules&sourceMap&localIdentName=[local]___[hash:base64:5]!sass'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};
