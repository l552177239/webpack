const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath:"dist/"
  },
  devtool:"source-map",
  module: {
	  rules: [
	    { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
	    {
        test: /\.css$/,
        use: ["style-loader","css-loader","postcss-loader"]
      },
      { test: /\.(jpe?g|png)$/, use: 'file-loader' }
	  ]
	}
}