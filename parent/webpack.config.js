const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');
const { HotModuleReplacementPlugin } = require('webpack');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.ts',
  output: {
    publicPath: 'http://localhost:3000/',
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsConfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json'), // Adjust path if necessary
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'parent',
      remotes: {
        mfe: 'mfe@http://localhost:3001/remoteEntry.js',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new Dotenv(),
    // new HotModuleReplacementPlugin(),
  ],
};
