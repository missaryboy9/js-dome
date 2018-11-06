const VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		path: __dirname + './build',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: ['vue-loader']
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.ttf$/,
				use: [
					{
						loader: 'ttf-loader',
						options: {
							name: './font/[hash].[ext]',
						},
					},
				]
			},
			{ test: /\.(eot|woff)$/, loader: "file-loader" }

		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
}