const VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
	mode: 'production',
	entry: './src/main.js',
	output: {
		path: __dirname + './build',
		filename: 'bundle.js'
	},
	performance: {
		hints: false
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
			{ test: /\.(eot|woff)$/, loader: "file-loader" },
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 81920
						}
					}
				]
			}

		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
	devServer: {
		proxy: {
			'/test': '192.168.0.115:8000'
		}
	}
}