const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const commonConfig = require('./config.common');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(), // display the relative path when HMR is enabled
  new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve(__dirname, '..', 'index.html'),
    alwaysWriteToDisk: true
  }),
  // generated output of the HtmlWebpackPlugin will always be written to disk - useful if you want to pick up the output with another middleware.
  new HtmlWebpackHarddiskPlugin({
    outputPath: path.resolve(__dirname, '..', 'build-dev', 'client')
  })
]

const config = merge(commonConfig, {
  entry: [
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?http://localhost:${process.env.HTTP_PORT}&reload=true`
  ],
  output: {
    hotUpdateMainFilename: 'hot-update.[hash:6].json',
    hotUpdateChunkFilename: 'hot-update.[hash:6].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
			  test: /\.(png|jpg|gif)$/,
			  use: [{
			    loader: 'url-loader',
          options: {
            limit: 15000
            // name: './img/[name].[ext]'
          }
			  }]
			},
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: plugins
})

module.exports = config;
