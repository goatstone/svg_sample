/*
 goatstone.ui.Component
 */
define(['stampit'],
    function (stampit) {

        var Component = stampit({
                sub: function (a) {
                    return 'sub...';
                },
                show: function (b) {
                    //this.getRootElement().style.display = 'block' ;
                    this.getRootElement().style.opacity = 1;
                    return this.id
                },
                hide: function () {
                    console.log('hide');
                    return 'hide';
                },
                setBG: function (color) {
                    this.getRootElement().style.backgroundColor = color;
                }
            },
            {
                id: ' [ parentObj ] ',
                pos: [20, 20]
            }, function (conf) {
                var rootElement = conf && conf.rootElement ? conf.rootElement : null;
                var privileged = 'privileged';
                this.getP = function () { // privileged method
                    return privileged;
                }
                this.getRootElement = function () {
                    return rootElement;
                }
                // setup element

            }
        );

        return Component;
    });
