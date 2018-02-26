'use strict';

const {resolve, join} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_DEV = process.env.NODE_ENV !== 'production';

const output = {
  publicPath: '/',
  path: resolve(__dirname, '..', 'build', 'client'),
  filename: '[name].js'
}

const extractTextPlugin = new ExtractTextPlugin({
  filename: 'bundle.css',
  disable: IS_DEV // disable plugin in dev
});

const plugins = [
  extractTextPlugin,
  new webpack.EnvironmentPlugin([ 'NODE_ENV' ]),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    minChunks: (module) => {
      if (module.resource && /^.*\.(css|scss)$/.test(module.resource)) {
        return false;
      }
      return module.context && module.context.includes('node_modules');
    }
  })
]

const config = {
  entry: ['./public/client/app.js'],
  output: output,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(sass|scss)$/,
  			use: extractTextPlugin.extract({
  		    fallback: {
            loader: 'style-loader',
            options: {sourceMap: IS_DEV}
          },
  		    use: [
            {
              loader: 'css-loader',
              options: {sourceMap: IS_DEV}
            },
            {
              loader: 'sass-loader',
              options: {sourceMap: IS_DEV}
            },
  		      {
  						loader: 'postcss-loader',
  						options: {sourceMap: IS_DEV}
  					}
  		    ]
  		  })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
        	loader: 'file-loader',
        	options: {
        		name: '[path][name].[ext]'
        	}
        }]
      }
    ]
  },
  plugins: plugins,
  resolve: {
    modules: ['node_modules', join('public', 'client')]
  },
  stats: {
    assetsSort: '!size',
    children: false,
    chunks: false,
    colors: true,
    entrypoints: false,
    modules: false
  }
}

module.exports = config;
