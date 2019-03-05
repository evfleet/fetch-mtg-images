const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/src/index.tsx"),
  output: {
    filename: "index.js",
    path: path.join(__dirname, "/dist")
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [new HTMLPlugin({ template: "./src/index.html" })]
};
