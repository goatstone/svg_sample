/*
 goatstone.svg_sample.Controller

 * */
define(['FlameFactory', 'Snap', 'PersonFactory'],

    function (FlameFactory, Snap, PersonFactory) {

        function Controller() {

            var paper = new Snap(400, 400).addClass('flame');

            var buttonOpenMenu = document.querySelector('button.open-menu');
            var menuTag = document.querySelector('menu');
            var menu = document.querySelector('menu ul');

            document.querySelector('menu').style.opacity = 0.0;
            document.querySelector('svg.person').style.opacity = 0.0;
            buttonOpenMenu.addEventListener('click', function () {
                if (document.querySelector('menu').style.opacity === '1'
                ) {
                    document.querySelector('menu').style.opacity = 0.0;
                } else {
                    document.querySelector('menu').style.opacity = 1.0;
                }
            });

            menu.addEventListener('click', function (e) {
                var selectedValue = e.target.attributes[0].value;
                if (selectedValue === 'flame') {
                    document.querySelector('svg.flame').style.opacity = 1.0;
                    document.querySelector('svg.person').style.opacity = 0.0;
                }
                else if (selectedValue === 'person') {
                    document.querySelector('svg.person').style.opacity = 1.0;
                    document.querySelector('svg.flame').style.opacity = 0.0;
                }
                menuTag.style.opacity = 0;
            });

            PersonFactory.create({}, new Snap('svg.person'));

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
                    position: [300, 120]
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
                    position: [100, 80]
                }, // state
                {paper: paper} //  arg to Flame
            );
        }

        return Controller;
    });
