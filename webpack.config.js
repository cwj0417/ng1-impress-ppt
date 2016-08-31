var path = require('path'),
    webpack = require("webpack"),
    srcPath = path.join(__dirname, 'src'),
    wwwPath = path.join(__dirname, 'www'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    env = process.env.NODE_ENV;

var config = {
	entry: {
	    main: path.join(srcPath, 'index.js'),
        styles: path.join(srcPath, 'styles.js'),
<<<<<<< HEAD
        vendor:["angular","lodash","showdown","impress.js","highlight.js"]
=======
        vendor:["angular","lodash"]
>>>>>>> 63a127c2519aa4394b697f666afcad8a9dab5838
	},
    output: {
        path: 'dist',
        filename: '[name]-[hash:6].js'
    },
    module: {
        loaders: [ {
            test: /\.(png|jpg)$/,
            loader: 'file?name=img/[name].[ext]'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.scss$/,
            loader: "style!css!autoprefixer!sass"
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "ng-annotate?add=true!babel?presets[]=es2015!eslint-loader"
        }, {
            test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
            loader: 'file?name=fonts/[name].[ext]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: path.join(srcPath, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle-[hash:6].js")
    ],
    eslint: {
        configFile: './.eslintrc'
    }
};
switch(env) {
    case "production":

        break;
    case "dev":

        break;
}

module.exports = config;
