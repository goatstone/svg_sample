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
                    color2: 'yellow',
                    speed: 700
                }, // state
                {paper: paper} //  arg to Flame
            );

            FlameFactory.create(
                {
                    id: 'blueFlame',
                    color: 'gray',
                    color1: 'blue',
                    color2: 'yellow',
                    speed: 500,
                    position:[300,120]
                }, // state
                {paper: paper} //  arg to Flame
            );
            FlameFactory.create(
                {
                    id: 'wideFlame',
                    color: 'gray',
                    color1: 'red',
                    color2: 'orange',
                    speed: 1500,
                    position:[100,80]
                }, // state
                {paper: paper} //  arg to Flame
            );
        }

        return Controller;
    });
