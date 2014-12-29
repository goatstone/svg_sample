/*
 goatstone.svg_sample.Controller

 * */
define(['Flame', 'Snap', 'PubSub', 'PersonFactory', 'Clock', 'SpinnerFactory', 'Menu', 'SnapPaper'],
    function (Flame, Snap, PubSub, PersonFactory, Clock, SpinnerFactory, Menu, SnapPaper) {

        function Controller() {

            var flames = [];
            var buttonOpenMenu = document.querySelector('button.open-menu');
            buttonOpenMenu.addEventListener('click', function () {
                PubSub.publish('menu', 'toggle');
            });

            var mainMenu = Menu.create({}, {rootElement: document.querySelector('menu')});
            mainMenu.sub('menu', function (arg, data) {
                if (data === 'toggle') {
                    mainMenu.toggle();
                }
            });
            mainMenu.show();

            var spinnerPaper = SnapPaper.create();
            var spinner = SpinnerFactory.create({}, {paper: spinnerPaper.snapPaper});

            var clockPaper = SnapPaper.create();
            Clock.create({}, {paper: clockPaper.snapPaper});

            var personPaper = SnapPaper.create({}, {snapPaperElementName: 'svg.person'});
            PersonFactory.create({}, {paper: personPaper.snapPaper});
            personPaper.show();

//            var flamePaper = new Snap(400, 400).addClass('flame');
//            flames.push(
//                Flame.create(
//                    {
//                        id: 'bigFlame',
//                        color: 'gray',
//                        color1: 'orange',
//                        color2: 'yellow',
//                        speed: 700
//                    }, //  state
//                    {paper: flamePaper} //  arg to Flame
//                ),
//                Flame.create(
//                    {
//                        id: 'blueFlame',
//                        color: 'gray',
//                        color1: 'blue',
//                        color2: 'yellow',
//                        speed: 500,
//                        position: [300, 120]
//                    },
//                    {paper: flamePaper}
//                )
//            );
            mainMenu.getRootElement().addEventListener('click', function (e) {
                    var selectedValue = e.target.attributes[0].value;
                    // PubSub.publish(selectedValue);
//                    flamePaper.attr({opacity: 0.0});
//                    clockPaper.attr({opacity: 0.0});
//                    personPaper.attr({opacity: 0.0});
                    //spinnerPaper.attr({opacity: 0.0});
                    //Snap('div.computer').attr({opacity: 0.0});
                    clockPaper.hide();
                    if (selectedValue === 'flame') {
                        flamePaper.attr({opacity: 1.0});
                    }
                    else if (selectedValue === 'person') {
                        personPaper.attr({opacity: 1.0});
                    }
                    else if (selectedValue === 'clock') {
                        clockPaper.show();
//                        clockPaper.attr({opacity: 1.0});
                    }
                    else if (selectedValue === 'computer') {
                        Snap('div.computer').attr({opacity: 1.0});
                    }
                    else if (selectedValue === 'spinner') {
                        spinnerPaper.show();
                    }
                    //menuTag.style.opacity = 0;
                }
            );

        }

        return Controller;
    }
)
;
