/**
 * Created by pavel on 24.7.16.
 */

'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:  './main.js',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                // loader: 'babel',
                exclude: /\/node_modules\//,
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 300
    },

    devtool: "source-map"
};