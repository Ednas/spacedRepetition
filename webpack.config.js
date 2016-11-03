
module.exports = {

  // This code will be compiled
  entry: __dirname + '/client/src/app.js',

  // Then output into this file
  // this is what would be the
  // bundle.js file
  output: {
    path: __dirname + '/client/dist/js',
    filename: 'app.js',
  },

  // This will be what we do
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          // These are the specific transformations we'll be using.
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  // this means you just type webpack - instead of webpack w
  watch: true

}
