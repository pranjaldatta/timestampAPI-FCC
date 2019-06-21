var webpack = require('webpack');
var path = require("path");

module.exports = {

    entry : "./client/index.js",

    output : {
        path : path.join(__dirname , "client"),
        filename : "bundle.js"
    },

    module : {
        
        rules : [
            
            {
                test : /.jsx?$/,
                exclude : /node_modules/,
                loader : 'babel-loader',
                query : {
                    presets : ['@babel/preset-env' , '@babel/react']
                }
            },

            {
                test : /\.css$/,
                loader : "style-loader!css-loader"
            }
        ]
    }
}