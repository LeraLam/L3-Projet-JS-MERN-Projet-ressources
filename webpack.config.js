const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/scripts/main.js'],

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'scripts/bundle.js'
  },

  mode : 'development',  // 'production'
  devtool: 'eval-source-map',
  watch : true,

  module: {
    rules: [
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" }, //Awesome Framework
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }, //Awesome Framework
     {
       test: /\.js$/,
       exclude: (/node_modules/),
       use: [
          { loader: 'babel-loader' }
       ]
     },
     {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      },
     {
       test: /\.(png|jpg|gif)$/,
       use: [
         {
           loader: 'file-loader',
           options: {
              name : '[name].[ext]',
             outputPath : 'images'
           }
         }
       ]
     }
   ]
 }
};
