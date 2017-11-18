# multiple-angular-widgets-with-requirejs

Simple app to demonstrate loading multiple Angular applications from requireJs

To run:

    npm install
    cd app-a
    npm install
    npm run build
    cd ..
    cd app-b
    npm install
    npm run build
    cd ..
    npm run start


Good to know:

* load the webpack bundles in serapate requirejs contexts, see this repo's bootstrap.js file
* use angular-cli
* run `ng eject` in apps to generate explicit webpack config
* edit webpack config, make Zone.js external
    "externals": {
        "zone.js/dist/zone": "Zone"
      },
* load Zone.js externally, see this repo's bootstrap.js file
* edit webpack config, make the webpack JsonP function name unique
    "output": {
        ...
        "jsonpFunction": __dirname.split("/").pop().replace(/-/,'')
      },