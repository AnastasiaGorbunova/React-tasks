const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/component.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    devServer: {
        contentBase: path.join(__dirname, './'),
        port: 9000,
        hot: true,
        open: true,
        historyApiFallback : true
    },
    resolve : {
        modules : ['src', 'node_modules']
    },
    node : {
        fs: 'empty'
    },
    plugins : [new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                test : /\.html$/,
                loader : 'raw-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            }
        ]
    }
};