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
                    this.getRootElement().style.opacity = 1;
                    return this.id;
                },
                hide: function () {
                    console.log('hide');
                    //this.getRootElement().style.opacity = 0.0;
                    this.getRootElement()
                        .attr({
                            display:'none'
                        });
                    return 'hide';
                },
                setBG: function (color) {
                    this.getRootElement().style.backgroundColor = color;
                }
            },
            {
                id: ' [ parentObj ] ',
                startPos: [20, 20]
            }, function (conf) {
                //console.log('conf: ', conf);
                //var rootElement = conf && conf.rootElement ? conf.rootElement : null;
                var rootElement;
                var privileged = 'privileged';
                this.getP = function () { // privileged method
                    return privileged;
                };
                this.getRootElement = function () {
                    return rootElement;
                };
                this.setRootElement = function (el) {
                    rootElement = el;
                };
            }
        );

        return Component;
    });
