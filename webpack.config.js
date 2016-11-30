var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.es6"
	},

	output: {
		path: "./dist/",
		filename: "app.js"
	},

	module: {
		loaders: [
			{test: /.es6/, loader: "babel"},
			{test: /.scss/, loaders: ["style", "css", "sass"]}
		]
	},

	devtool: "source-maps",

	plugins: [
		new HtmlWebpackPlugin()
	]
};