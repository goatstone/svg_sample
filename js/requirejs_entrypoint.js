/*
 requirejs_entrypoint.js
 *  */

require([], function () {

    require.config({
        baseUrl: '../src',
        paths: {
            stampit: "/node_modules/stampit/dist/stampit",
            //PubSub:             'vendor/pubsub',
            Snap: '/node_modules/snapsvg/dist/snap.svg',
            Controller: 'goatstone/svg_sample/Controller',
            FlameFactory: 'goatstone/ui/animation/FlameFactory',
            PersonFactory: 'goatstone/ui/animation/PersonFactory',
            Clock: 'goatstone/ui/animation/Clock',
            Component: 'goatstone/ui/Component'
        }
    });

    require([
        "Controller"
    ], function (Controller) {
        new Controller();
    });

});