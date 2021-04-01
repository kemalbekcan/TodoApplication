const { resolve } = require("path");
const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
      },
      module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env',"@babel/preset-react"]
                }
              }
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
              },
          ]
      },
};