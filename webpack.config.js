/*eslint-disable */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './demo/basic-demo'
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [ path.resolve(__dirname, './demo'), path.resolve(__dirname, './src')]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
	      test: /\.(jpe?g|png|ttf|eot|otf|woff|woff2|gif|svg)$/i,
	      loaders: [
	        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            query: { bypassOnDebug: false, optipng: { optimizationLevel: 4 }, gifsicle: { interlaced: false } }
          }
	      ]
      }
    ]
  }
};
