var path = require('path');

var DIST_DIR = path.resolve(__dirname,'dist/assets');
var SRC_DIR = path.resolve(__dirname,'src')



module.exports = {
  entry: path.join(SRC_DIR,'index.js'),
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    inline: true,
    contentBase: path.join(__dirname,'dist'),
    port: 3000
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loaders: ['json-loader']
      }
    ]
  }

}