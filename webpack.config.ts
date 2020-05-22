import webpack from 'webpack';

import {join} from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import {CleanWebpackPlugin} from 'clean-webpack-plugin';

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  output: {
    filename: 'app.[hash].js',
    path: join(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
  },
  optimization: {
    usedExports: true,
  },
};

export default config;
