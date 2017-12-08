const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {

    'zone': [ './node_modules/zone.js/dist/zone' ]
  },

  output: {
    filename: 'zone.bundle.js',
    path: path.join(__dirname, 'dist/'),

    // The name of the global variable which the library's
    // require() function will be assigned to
  },
};
