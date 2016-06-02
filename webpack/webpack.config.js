"use strict";

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {

    entry: './app.js',
    output: {
        filename: './build.js',
        library: 'lib'
    },

    watch: NODE_ENV === 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,

    plugins: [
        new webpack.EnvironmentPlugin('NODE_ENV','USER')
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015'
            }
        ]
    }
};