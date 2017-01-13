var path = require('path');
var eq = require('lodash/eq');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

var entries = [
  'webpack-hot-middleware/client',
  path.join(__dirname, '/src/index.js'),
  "./assets/sass/index.scss"
];

var loaders = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components|dist)/,
    loaders: [ 'babel' ]
  },
  {
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap' ]
  },
  {
     test: /\.(woff|woff2|ttf|svg|eot|png|jpg|gif|pdf)/, 
     loader: 'url-loader' 
  }
]

module.exports = {
  devtool: 'source-map',
  entry: entries,
  cache: true,
  output: {
      path: path.join(__dirname, '/dist'),
      filename: "[name].js",
      publicPath: '/'
  },
  module: {
    loaders: loaders
  },
  resolve: {
    root: [
      path.resolve('./src'),
    ],
    modulesDirectories: [
      path.resolve('./node_modules')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}