import path from "path";
import merge from "webpack-merge";

import BaseWebpackConfig from "./webpack.config.base.babel";

export default merge(BaseWebpackConfig, {
  // The point or points to enter the application.
  entry: {
    app: ["./src/index"],
  },

  // Affecting the output of the compilation
  output: {
    // path: the output directory as an absolute path (required)
    path: path.resolve(__dirname, "/build"),
    // filename: specifies the name of entry output file (required)
    // filename: "[name].[hash:10].js",
    filename: "bundle.js",
    // chunkFilename: specifies the name of non-entry output files (e.g. dynamic import component)
    // chunkFilename: "[name].[hash:10].js",
    // publicPath: "/",
  },

  devServer: {
    // Port number for webpack dev server
    port: 3000,
    // Automatically open page
    open: true,
    // Serves index.html (contains 404 page in react-router) in place of any 404 responses
    historyApiFallback: true,
    // Shows a full-screen overlay when there are compiler errors
    overlay: true,
  },

  // Source map mode
  // https://webpack.js.org/configuration/devtool
  devtool: "eval-source-map",
});
