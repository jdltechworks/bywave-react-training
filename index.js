var eq = require('lodash/eq');
var isNull = require('lodash/isNull');
var path = require('path');
var express = require('express');
var config = require('./webpack.config.js');

var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 5000 : process.env.PORT;
var app = express();

var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var compiler = webpack(config);

if (isDeveloping) {

  var middleware = webpackMiddleware(compiler, {
    contentBase: './dummy',
    publicPath: '/',
    hot:        true,
    inline:     false,
    lazy:       false,
    quiet:      false,
    noInfo:     false,
    headers:    { "Access-Control-Allow-Origin": "*" },
    stats:      { colors: true }
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));  
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('Running in localhost:%s', port);
});