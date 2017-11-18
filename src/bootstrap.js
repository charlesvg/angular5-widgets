define('my-generic-widget', function (widgetInstance) {

    var widget;
    gw = function (widgetInstance) {
        this.widget = widgetInstance;
        this.bootstrap();
    }

    gw.prototype.bootstrap = function () {
        var appPath = this.widget.attributes['app-path'].nodeValue;
        var appSelector = this.widget.attributes['app-selector'].nodeValue;

        var ctx = require.config({
            context: this.widget.id,
            paths: {
                'inline': appPath + '/dist/inline.bundle',
                'polyfills': appPath + '/dist/polyfills.bundle',
                'main': appPath + '/dist/main.bundle',
                'vendor': appPath + '/dist/vendor.bundle',
                'styles': appPath + '/dist/styles.bundle'
            }
        });

        var element = document.createElement(appSelector);
        this.widget.appendChild(element);

        require(['https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.8.14/zone.js'], function () {
            ctx(['inline'], function () {
                ctx(['polyfills'], function () {
                    ctx(['vendor'], function () {
                        ctx(['styles'], function () {
                            ctx(['main'], function () {
                                console.log('widget loaded');
                            });
                        });
                    });
                });
            });
        });


    }

    return gw;


});