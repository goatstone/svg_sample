/*
 requirejs_entrypoint.js
 *  */

require([], function () {

    require.config({
        baseUrl: '../src',
        paths: {
            stampit: "/node_modules/stampit/dist/stampit",
            //PubSub:             'vendor/pubsub',
            //
            //Model:              'goatstone/svg_sample/model/Model',
            Controller: 'goatstone/svg_sample/Controller',
            FlameFactory: 'goatstone/ui/animation/FlameFactory',

            //Message:            'goatstone/ui/Message',
            Component: 'goatstone/ui/Component'
            //ActionBar:          'goatstone/ui/ActionBar',
            //Panel:              'goatstone/ui/Panel',
        }
    });

    require([
        "Controller"
    ], function (Controller) {
        new Controller();
    });

});