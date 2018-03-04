const path = require('path');
const webpack = require('webpack');

// Express-style dev middleware for use with webpack bundles and allows for serving of the files emitted from webpack.
// * Ex: If files changed in watch mode, the middleware delays requests until compiling has completed.
// * No files are written to disk, rather it handles files in memory
// * Supports hot module reload (HMR).
const webpackDevMiddleware = require('webpack-dev-middleware');

// Webpack hot reloading using only webpack-dev-middleware. This allows you to add hot reloading into an existing server without webpack-dev-server.
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../../webpack/config.dev');

// The imported webpack function is fed a webpack Configuration Object and runs the webpack compiler if a callback function is provided:
const compiler = webpack(webpackConfig);

module.exports = function setup(app) {
  app.use(
    webpackDevMiddleware(compiler, {
      // publicPath property is required, whereas all other options are optional
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true
      }
    })
  );

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));

  // all other requests be handled by UI itself
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', '..', '..', 'build', 'client', 'index.html')));
};
