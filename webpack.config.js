module.exports = {
  entry: [
    'whatwg-fetch',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
          test: /\.json$/,
          loader: 'json'
      },
     {
        test: /\.scss$/,
        loader: "css-loader!sass-loader"
     } 
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
