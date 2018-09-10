const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

const webpackConfigOptions = {
  node: {
    fs: 'empty'
  },
  devtool: IS_DEVELOPMENT
    ? 'cheap-module-eval-source-map'
    : 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src/')
  },
  entry: [
    'regenerator-runtime/runtime',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': IS_DEVELOPMENT
          ? '"development"'
          : '"production"'
      }
    }),
    new CopyWebpackPlugin([
      { from: 'src/index.html' }
    ])
  ]
}

module.exports = webpackConfigOptions
