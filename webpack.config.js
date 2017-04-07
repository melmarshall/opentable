var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/build');
var APP_DIR = path.resolve(__dirname, 'src/app');

module.exports = {
    entry: [
        APP_DIR + '/index.jsx',
        APP_DIR + '/less/styles.less'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
              test: /\.less$/,
              loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
            },
        ]
    },
    devtool: 'source-map'
};
