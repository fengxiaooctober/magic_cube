var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
	entry: path.resolve(__dirname, './app/main.js'),
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js',
	},
	resolve: {
		alias: {
		}
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			loader: 'babel-loader'
		},{
			test: /\.(scss)$/,
			loader: 'style-loader!css-loader!sass-loader'
		}]
	},
	devServer: {
		port: 8088
	}
};