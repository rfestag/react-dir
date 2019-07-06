var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    //path: path.resolve(__dirname, "./dist"),
    path: __dirname,
    filename: "index.js",
    library: "",
    libraryTarget: "commonjs"
  },
  externals: {
    react: "commonjs react"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|tutorials|examples)/,
        loader: "babel-loader",
        resolve: { extensions: [".js", ".jsx"] },
        options: {
          presets: ["@babel/preset-env", "@babel/react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
