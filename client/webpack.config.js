const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.

// TODO: Add CSS loaders and babel to webpack.


module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Progressive', // Jate Text Editor
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Progressive',// 'JUST ANOTHER TEXT EDITOR'
        short_name: 'Progressive',//  'JATE'
        description: 'A simple text editor that saves your work.',
        background_color: '#01579b', //need to change color
        theme_color: '#ffffff',//need to change color
        start_url: '/',// not sure if i need .
        icons: [
          {
            src: path.resolve('src/images/icons/icon-512x512.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            // this is the size of the icon
            destination: path.join('assets', 'icons'),
          },
        ],

      }),

    ],
    experiments: { // we need this to enable top level await in webpack
      topLevelAwait: true,// not sure if this is needed
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test:/\.js$/,
          // /\.js$/ matches all files ending in .js
          // ??????
          exclude: /node_modules/,

          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime'],
              // this is needed to enable top level await in webpack
              // ??????
            }
          }
        }
      ],
    },
  };
};
