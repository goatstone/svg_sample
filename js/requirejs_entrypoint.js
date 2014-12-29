/*
 requirejs_entrypoint.js
 *  */

require([], function () {

    require.config({
        baseUrl: '../src',
        paths: {
            stampit: "/node_modules/stampit/dist/stampit",
            Snap: '/node_modules/snapsvg/dist/snap.svg',
            Controller: 'goatstone/svg_sample/Controller',
            Flame: 'goatstone/ui/animation/Flame',
            PersonFactory: 'goatstone/ui/animation/PersonFactory',
            SpinnerFactory: 'goatstone/ui/animation/SpinnerFactory',
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