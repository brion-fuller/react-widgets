/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssimport = require('postcss-import');
const cssnext = require('postcss-cssnext');

const src = resolve(__dirname, './src');
const dist = resolve(__dirname, './dist');

module.exports = {
  entry: {
    index: [
      resolve(src, 'index'),
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  output: {
    filename: 'index.js',
    path: dist,
    library: 'FullerWidgets',
    libraryTarget: 'umd',
  },
  context: src,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        include: [src],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        include: [src],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: 'fuller_[name]_[local]',
                sourceMap: true,
                importLoaders: 1,
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    cssimport,
                    cssnext,
                  ];
                },
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
      },
    }),
    new ExtractTextPlugin('styles.min.css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
