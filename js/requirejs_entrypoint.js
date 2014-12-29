/*
 requirejs_entrypoint.js
 *  */

require([], function () {

    require.config({
        baseUrl: '../src',
        paths: {
            stampit: "/node_modules/stampit/dist/stampit",
            Snap: '/node_modules/snapsvg/dist/snap.svg',
            PubSub: '/node_modules/pubsub-js/src/pubsub',

            Controller: 'goatstone/svg_sample/Controller',
            Component: 'goatstone/ui/Component',

            Flame: 'goatstone/ui/animation/Flame',
            PersonFactory: 'goatstone/ui/animation/PersonFactory',
            SpinnerFactory: 'goatstone/ui/animation/SpinnerFactory',
            Clock: 'goatstone/ui/animation/Clock',
            Menu: 'goatstone/svg_sample/ui/Menu'
        }
    });

    require([
        "Controller"
    ], function (Controller) {
        new Controller();
    });

});