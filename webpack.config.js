module.exports = {
  entry: './src',
  output: {
    path: __dirname + '/dist/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 7777
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'scss']
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader?presets[]=react,presets[]=es2015']
    }, {
      test: /\.(jpe?g|ttf|svg|eot|woff)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[hash].[ext]'
      }
    }, {
      test: /\.md$/,
      use: 'raw-loader'
    }
    ]
  }
}
