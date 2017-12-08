const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        'vendor': [
          './common/polyfills.ts',
          './common/vendor.ts' ]
    },

    output: {
        filename: '[name].dll.js',
        path: path.join(__dirname, 'dist/'),

        // The name of the global variable which the library's
        // require() function will be assigned to
        library: '[name]',
    },
    // module: {
    //     rules: [
    //         {
    //             test: path.resolve(__dirname, 'node_modules/@angular/core/esm5/core.js'),
    //             use: 'null-loader'
    //         }
    //     ]
    // },
    plugins: [
        // new webpack.ContextReplacementPlugin(
        //     // The (\\|\/) piece accounts for path separators in *nix and Windows
        //     /angular(\\|\/)core(\\|\/)/,
        //     path.join(__dirname, './src/app'), // location of your src
        //     {} // a map of your routes
        // ),
        new webpack.DllPlugin({
            // The path to the manifest file which maps between
            // modules included in a bundle and the internal IDs
            // within that bundle
            path: 'dist/[name]-manifest.json',
            // The name of the global variable which the library's
            // require function has been assigned to. This must match the
            // output.library option above
            name: '[name]'
        }),
      // new UglifyJsPlugin()
    ],
};
