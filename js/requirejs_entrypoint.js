/*
requirejs_entrypoint.js
 *  */

require([], function () {

    require.config({
        baseUrl: '../src',
        paths: {
            //PubSub:             'vendor/pubsub',
            //
            //Model:              'goatstone/svg_sample/model/Model',
            Controller:         'goatstone/svg_sample/Controller',
            //BubbleText:         'goatstone/svg_sample/ui/component/BubbleText',

            //Message:            'goatstone/ui/Message',
            //Component:          'goatstone/ui/Component',
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