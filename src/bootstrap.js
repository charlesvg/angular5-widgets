define('my-generic-widget', function (widgetInstance) {

    var widget;
    gw = function (widgetInstance) {
        this.widget = widgetInstance;
        this.bootstrap();
    }

    gw.prototype.bootstrap = function () {
        var appPath = this.widget.attributes['app-path'].nodeValue;
        var appSelector = this.widget.attributes['app-selector'].nodeValue;
        // var inline = this.widget.id+'inline';

        var config = {};
        config['context'] = this.widget.id;
        config['paths'] = {};

        var inlineModule = this.widget.id + 'inline';
        var polyfillModule = this.widget.id + 'polyfills';
        var mainModule = this.widget.id + 'main';
        var vendorModule = this.widget.id + 'vendor';
        var stylesModule = this.widget.id + 'styles';

        config.paths[inlineModule] = appPath + '/dist/inline.bundle';
        config.paths[polyfillModule] = appPath + '/dist/polyfills.bundle';
        config.paths[mainModule] = appPath + '/dist/main.bundle';
        config.paths[vendorModule] = appPath + '/dist/vendor.bundle';
        config.paths[stylesModule] = appPath + '/dist/styles.bundle';

        var ctx = require.config(config);

        // var ctx = require.config({
        //     context: this.widget.id,
        //     paths: {
        //         'inline': appPath + '/dist/inline.bundle',
        //         'polyfills': appPath + '/dist/polyfills.bundle',
        //         'main': appPath + '/dist/main.bundle',
        //         'vendor': appPath + '/dist/vendor.bundle',
        //         'styles': appPath + '/dist/styles.bundle'
        //     }
        // });

        var element = document.createElement(appSelector);
        this.widget.appendChild(element);

        require(['https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.8.14/zone.js'], function () {
            ctx([inlineModule], function () {
                ctx([polyfillModule], function () {
                    ctx([vendorModule], function () {
                        ctx([stylesModule], function () {
                            ctx([mainModule], function () {
                                console.log('widget loaded');
                            });
                        });
                    });
                });
            });
        });

        // require(['https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.8.14/zone.js'], function () {
        //     ctx(['inline'], function () {
        //         ctx(['polyfills'], function () {
        //             ctx(['vendor'], function () {
        //                 ctx(['styles'], function () {
        //                     ctx(['main'], function () {
        //                         console.log('widget loaded');
        //                     });
        //                 });
        //             });
        //         });
        //     });
        // });


    }

    return gw;


});