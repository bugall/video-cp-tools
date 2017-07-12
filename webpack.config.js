var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		'app': [ path.resolve('src/Main')],
	}, output: {
		path: path.resolve('build'),
    filename: '[name].bundle.js',
    pathinfo: false // show module paths in the bundle, handy for debugging
	}, module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      query: {
      'doTypeCheck': true
      },
      include: path.resolve('src/Main'),
      exclude: /node_modules/
    }],
  }, resolve: {
    alias: { },
    extensions: [".js", ".ts"]
  }, plugins: [
    ]
};
