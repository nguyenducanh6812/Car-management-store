var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/App.jsx',
    vendor: ['react','react-dom','react-router','react-bootstrap'],
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
               /* chunkName= */'vendor',
               /* filename= */'vendor.bundle.js'),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-object-assign']
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-assign'],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg|gif|jpg|png)$/,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};

