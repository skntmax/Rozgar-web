const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {

        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(js|jsx)$/,
                loader: require.resolve('babel-loader'),
                options: {
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel'],
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }


        ]
    }
};