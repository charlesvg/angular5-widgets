define('my-generic-widget', function (widgetInstance) {

    var widget;
    gw = function (widgetInstance) {
        this.widget = widgetInstance;
        this.bootstrap();
    }

    gw.prototype.bootstrap = function () {
        var appBundleName = this.widget.attributes['app-bundle-name'].nodeValue;
        var appSelector = this.widget.attributes['app-selector'].nodeValue;

        var widgetContext = require.config({
            context: this.widget.id,
            paths: {
                'main': '/dist/' + appBundleName + '.bundle'
            }
        });

      var mainContext = require.config({
        context: 'my-generic-widget',
        paths: {
          'inline': '/dist/inline.bundle',
          'polyfills': '/dist/polyfills.bundle',
          'vendor': '/dist/vendor.bundle',
          'styles': '/dist/styles.bundle'
        }
      });

        var element = document.createElement(appSelector);
        this.widget.appendChild(element);

        var self = this;
      mainContext(['https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.8.14/zone.js'], function () {
        mainContext(['inline'], function () {
          mainContext(['polyfills'], function () {
            mainContext(['vendor'], function () {
              mainContext(['styles'], function () {
                widgetContext(['main'], function () {
                                console.log('Loaded widget ', self.widget);
                            });
                        });
                    });
                });
            });
        });


    }

    return gw;


});
