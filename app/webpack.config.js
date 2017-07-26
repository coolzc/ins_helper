const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool:'cheap-module-eval-source-map',
  entry: path.resolve(__dirname, './js/app.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      query: {
        presets: ['babel-preset-es2015', 'react'],
      },
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      }, {
        loader: 'postcss-loader',
      }],
    }, {
      test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
    }, {　　　
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'　　
    }],
  },
  devServer: {
    inline:true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
    //new CopyWebpackPlugin([{
    //  from: './index.html',
    //  to: './'
    //}])
  ],
}

