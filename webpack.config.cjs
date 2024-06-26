const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.tsx',
    devServer: {
        host: 'localhost',
        port: 8085,
        hot: true,
        static: {directory: __dirname },
        allowedHosts: 'all',
        client: {
            overlay: false,
        },
        devMiddleware: {
            writeToDisk: true,
        },
    },
    output: {
        filename: './[name].min.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: 'defaults' }],
                                [
                                    '@babel/preset-react',
                                    {
                                        runtime: 'automatic'
                                    },
                                ],
                                '@babel/preset-typescript',
                            ],
                            cacheDirectory: false,
                            cacheCompression: false,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};