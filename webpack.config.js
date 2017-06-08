/* eslint-env node */

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    context: __dirname,
    entry: {
        app: './js/index.js',
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    devtool: 'eval',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.bundle.js',
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    devServer: {
        publicPath: '/public/',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                use: {
                    loader: 'eslint-loader'
                },
                include: path.resolve(__dirname, 'js')
            },
            {
                test: /\.json$/,
                use: {
                    loader: 'json-loader'
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                include: path.resolve(__dirname, 'js')
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.CommonsChunkPlugin({ name:'vendor', filename: 'vendor.bundle.js'})
    ]
}
