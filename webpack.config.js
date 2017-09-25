/* eslint-env node */

const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const GoogleFontsPlugin = require('google-fonts-webpack-plugin')
const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let pathsToClean = [
    'build'
]

const prodPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
    }),
    new CleanWebpackPlugin(pathsToClean),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        beautify: false,
        mangle: true,
        parallel: {
            cache: true,
            workers: 4
        },
        compress: {
            warnings: false, // Suppress uglification warnings
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            screw_ie8: true
        },
        output: {
            comments: false,
        },
        exclude: [/\.min\.js$/gi] // skip pre-minified libs
    })
]

let plugins = [

    // nice reporting
    // new BundleAnalyzerPlugin(),

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
        minChunks: 3,
        names: ['common', 'vendor', 'trash']
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new GoogleFontsPlugin({
        fonts: [
            { family: 'Nunito', variants: [ '300', '400', '600', '700' ] }
        ],
        local: false
    })
]

let devtool = 'eval'

if (process.env.NODE_ENV === 'production') {
    plugins = plugins.concat(prodPlugins)
    devtool = 'source-map'
}

module.exports = {
    context: __dirname,
    entry: {
        app: './js/index.js',
        trash: [
            'moment',
        ],
        common: [
            'react',
            'glamorous',
            'glamor',
            'ramda',
            'rxjs'
        ],
        vendor: [
            'react-dom',
            'react-router-dom',
            'react-redux-i18n',
            'firebase',
            'redux',
            'redux-thunk',
            'react-redux',
            'redux-logger'
        ]
    },
    devtool,
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[hash].bundle.js',
        pathinfo: true,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            path.resolve('./js/state/'),
            path.resolve('./node_modules')
        ]
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
        historyApiFallback: true,
        port: 9000,
        host: '0.0.0.0'
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
    plugins
}
