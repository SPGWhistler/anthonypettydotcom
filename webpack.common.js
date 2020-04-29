const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const btoa = require('btoa');
const escape = require('escape-html');
const fs = require('fs');

const htmlCommonConfig = {
	inject: false,
	minify: false,
	cache: true,
	showErrors: true,
	hash: true
};

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: {
		'index': ['./index.js']
	},

	module: {
		rules: [
			{
				//This allows us to use es6.
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				include: [
					path.resolve(__dirname, 'src')
				],
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								// To see browsers that will be supported, go to https://browserl.ist/?q=defaults
								// defaults is defined as > 0.5% of global usage, last 2 versions of major browsers, Firefox ESR, not dead
								//targets: 'defaults',
								// add polyfills from @babel/polyfill as needed based on what features we use in code
								//useBuiltIns: 'usage'
							}]
						]
					}
				}
			},
			{
				//Automatically load css files as js modules and also
				//inject them into the DOM.
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader']
			},
			{
				//Load pug files
				test: /\.pug$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'pug-loader'
					}
				]
			}
		]
	},
	plugins: [
		//This replaces any string found in the modules which match the key.
		new webpack.DefinePlugin({
			//The current date and time
			BUILDTIME: JSON.stringify(new Date().toString()),
			ANTHONYPETTYSOURCE: '"' + escape(btoa(fs.readFileSync(path.resolve(__dirname, 'src/classes/AnthonyPetty.js'), 'utf8'))) + '"'
		}),
		new HtmlWebpackPlugin(Object.assign({
			filename: 'index.html',
			template: 'assets/templates/index.pug'
		}, htmlCommonConfig))
	],
	optimization: {
		splitChunks: {
		}
	},
	output: {
		filename: '[name].js', //The [name] is the key of the entries object.
	}
};