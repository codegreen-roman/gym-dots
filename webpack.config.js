/* eslint-env node */

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const devtool = process.env.NODE_ENV === 'production' ? 'source-map' : 'eval'

module.exports = {
    context: __dirname,
    entry: {
        app: './js/index.js',
        common: [
            'react',
            'glamorous',
            'glamor',
            'ramda'
        ],
        vendor: [
            'react-dom',
            'react-router-dom',
            'react-redux-i18n',
            'firebase',
            'moment',
            'rxjs',
            'redux',
            'redux-logger',
            'redux-thunk',
            'faker'
        ]
    },
    devtool,
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js',
        pathinfo: true,
        publicPath: '/'
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
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        publicPath: '/',
        stats: 'minimal',
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
                }),
                include: path.resolve(__dirname, 'styles'),
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, 'public', 'index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new ExtractTextPlugin('main.css'),
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2,
            names: ['common', 'vendor']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                warnings: false,
                screw_ie8: true
            },
            output: {
                comments: false,
                ascii_only: true,
            },
        })
    ]
}
