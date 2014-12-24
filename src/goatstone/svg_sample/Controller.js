/*
 goatstone.svg_sample.Controller

 * */

define(["Component", 'FlameFactory'],
    function (Component, FlameFactory) {

        function Controller() {

            var flame0 = FlameFactory.create(
                {id: 'bigFlame'},
                {rootElement: document.querySelector('div')}
            );
            var flame1 = FlameFactory.create(
                {id: 'smallFlame'},
                {rootElement: document.querySelector('div:nth-child(2)')}
            );
            flame1.setBG('red');
        }

        return Controller;

    });
