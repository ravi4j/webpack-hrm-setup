const path = require('path');
const webpack = require('webpack');


module.exports = {
   mode:  'development',
   entry: ['webpack-hot-middleware/client' , 
            './src/index.js'
           ],
   devtool: 'inline-source-map',
   devServer: {
        contentBase: './html',
        hot: true
    },
    module: {
         rules: [
           {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
          ]
        },
   plugins: [
       new webpack.NamedModulesPlugin(),
       new webpack.HotModuleReplacementPlugin()
    ],
    noParse: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'test'),
      path.join(__dirname, 'html'),
      path.join(__dirname, 'bin')
  ],
  output: {
    path: path.resolve(__dirname, 'html'),
    filename: 'bundle.js',
    publicPath: '/'
  }
};