/*
 goatstone.svg_sample.Controller

 * */
define(['Flame', 'Snap', 'PersonFactory', 'Clock', 'SpinnerFactory', 'Menu'],
    function (Flame, Snap, PersonFactory, Clock, SpinnerFactory, Menu) {

        function Controller() {
            var buttonOpenMenu = document.querySelector('button.open-menu');
            var mainMenu = Menu.create({}, {rootElement: document.querySelector('menu')});
            mainMenu.show();

            var spinnerPaper = new Snap(300, 300);
            SpinnerFactory.create({}, {paper: spinnerPaper});
            var clockPaper = new Snap(300, 300);
            Clock.create({}, {paper: clockPaper});
            var personPaper = new Snap('svg.person');
            PersonFactory.create({}, personPaper);
            var flames = [];
            var flamePaper = new Snap(400, 400).addClass('flame');
            flames.push(Flame.create(
                    {
                        id: 'bigFlame',
                        color: 'gray',
                        color1: 'orange',
                        color2: 'yellow',
                        speed: 700
                    }, //  state
                    {paper: flamePaper} //  arg to Flame
                ),
                Flame.create(
                    {
                        id: 'blueFlame',
                        color: 'gray',
                        color1: 'blue',
                        color2: 'yellow',
                        speed: 500,
                        position: [300, 120]
                    },
                    {paper: flamePaper}
                )
            );

            buttonOpenMenu.addEventListener('click', function () {
                mainMenu.toggle();
            });

            mainMenu.getRootElement().addEventListener('click', function (e) {
                    var selectedValue = e.target.attributes[0].value;
                    flamePaper.attr({opacity: 0.0});
                    clockPaper.attr({opacity: 0.0});
                    personPaper.attr({opacity: 0.0});
                    spinnerPaper.attr({opacity: 0.0});
                    Snap('div.computer').attr({opacity: 0.0});
                    if (selectedValue === 'flame') {
                        flamePaper.attr({opacity: 1.0});
                    }
                    else if (selectedValue === 'person') {
                        personPaper.attr({opacity: 1.0});
                    }
                    else if (selectedValue === 'clock') {
                        clockPaper.attr({opacity: 1.0});
                    }
                    else if (selectedValue === 'computer') {
                        Snap('div.computer').attr({opacity: 1.0});
                    }
                    else if (selectedValue === 'spinner') {
                        spinnerPaper.attr({opacity: 1.0});
                    }
                    //menuTag.style.opacity = 0;
                }
            );

        }

        return Controller;
    }
)
;
