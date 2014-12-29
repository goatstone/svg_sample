/*
 goatstone.svg_sample.ui.Menu

 * */
define(['stampit', 'Component' ],
    function (stampit, Component) {

        var Menu = stampit({},
            {
                id: '[ Menu ]',
                rootElement: null,
                position: [210, 100]
            },
            function (conf) {
                if (conf && conf.rootElement) {
                    this.setRootElement(conf.rootElement);
                } else {
                    throw 'Root element must be provided.';
                }
            });

        return stampit().compose(Component, Menu);
    });