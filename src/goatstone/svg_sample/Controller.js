/*
 goatstone.svg_sample.Controller

 * */

define(['FlameFactory', 'Snap'],
    function (FlameFactory, Snap) {

        function Controller() {

            var paper = new Snap(400, 400);

            FlameFactory.create(
                {
                    id: 'bigFlame',
                    color: 'gray',
                    color1: 'orange',
                    color2: 'blue',
                    speed: 700
                }, // state
                {paper: paper} //  arg to Flame
            );

            FlameFactory.create(
                {
                    id: 'redFlame',
                    color: 'gray',
                    color1: 'red',
                    color2: 'green',
                    speed: 4000
                }, // state
                {paper: paper} //  arg to Flame
            );

            FlameFactory.create(
                {
                    id: 'violetFlame',
                    color: 'blue',
                    color1: 'violet',
                    color2: 'red',
                    speed: 2000
                }, // state
                {paper: paper} //  arg to Flame
            );

        }

        return Controller;

    });
