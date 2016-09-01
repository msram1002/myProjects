var webpack = require('webpack');

module.exports = {
  //where code processing begins
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root:__dirname,
    alias:{
      //path names are provided here
      Main: 'app/components/Main.jsx',
      Header: 'app/components/Header.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      WeatherSearchForm: 'app/components/WeatherSearchForm.jsx',
      WeatherReport: 'app/components/WeatherReport.jsx',
      openWeather: 'app/api/openWeather.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader', // telling babel loader to
      //parse them in React and let them run in ES2015
      query: {
        presets: ['react', 'es2015']
      },
      //Input files through test, escape dot and
      //look for JSX files
      test: /\.jsx?$/,
      //which folders you do not want to parse
      exclude: /(node_modules|bower_components)/
    }]
  }
}
