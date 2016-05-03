var webpack = require("webpack")

module.exports = {

  cache: true,

  resolve:{
    extensions:['','.jsx','.js','.json']
  },

  entry: __dirname + "/vistas/main.js",

  output: {
    path: __dirname + "/vistas",
    filename: "bundle.js"
  },

  module: {
    loaders:[
      {
        test: /(\.js|\.jsx)$/,
        loader: "babel",
        query: { presets: ['es2015','stage-0','react']}
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css/,
        loaders: ['style', 'css', 'cssnext']
      }
    ]
  },
  plugins: [
      new webpack.DefinePlugin({
          "process.env": {
              BROWSER: JSON.stringify(true)
          }
      })
  ]
}
