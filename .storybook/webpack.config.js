const { resolve } = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: [resolve(__dirname, '../src')],
        loaders: ['style-loader','css-loader?modules&importLoaders=1&localIdentName=fuller_[name]_[local]&sourceMap','postcss-loader'],
      },
    ],
  },
  postcss: () => {
    return [
      require('postcss-import'),
      require('postcss-cssnext'),
    ];
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}