var webpackMerger = require('webpack-merge');
var path = require('path');
var commonConfig = require('./webpack.common.config');

module.exports = webpackMerger(commonConfig,  {

    devtool: 'cheap-module-eval-source-map',
    output : {
        path : path.resolve(__dirname + '/public/js/app'),
        publicPath : '/js/app/',
        filename : 'bundle.js',
        publicPath : '/js/app/',
      //  chunkFilename: '[id].chunk.js'

    },

    module : {

        rules : [
                {
                  test: /\.ts$/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                transpileOnly: true
                            }
                        },
                        {loader: 'angular2-template-loader'},
                        {loader: 'angular-router-loader'}
                    ]
                }
            ]
        }
});


