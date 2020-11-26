const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: "development",
	entry: {
		main: "./assets/js/index.js",
		postComponent: "./assets/js/components/post.js"
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html"
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader', 'css-loader'
				]
			}
		]
	}
}