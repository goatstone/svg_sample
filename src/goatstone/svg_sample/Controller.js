/*
 goatstone.svg_sample.Controller

 * */
define(['Flame', 'Snap', 'PubSub', 'PersonFactory', 'Clock', 'SpinnerFactory', 'Menu', 'SnapPaper'],
    function (Flame, Snap, PubSub, PersonFactory, Clock, SpinnerFactory, Menu, SnapPaper) {

        function Controller() {

            var flames = [];
            var buttonOpenMenu, mainMenu;
            var spinnerPaper, spinner, clockPaper, personPaper, flamePaper;

            buttonOpenMenu = document.querySelector('button.open-menu');
            buttonOpenMenu.addEventListener('click', function () {
                PubSub.publish('menu', 'toggle');
            });

            mainMenu = Menu.create({}, {rootElement: document.querySelector('menu')});
            mainMenu.sub('menu', function (arg, data) {
                if (data === 'toggle') {
                    mainMenu.toggle();
                }
            });
            mainMenu.show();

            spinnerPaper = SnapPaper.create();
            spinner = SpinnerFactory.create({}, {paper: spinnerPaper.snapPaper});

            clockPaper = SnapPaper.create();
            Clock.create({}, {paper: clockPaper.snapPaper});

            personPaper = SnapPaper.create({}, {snapPaperElementName: 'svg.person'});
            PersonFactory.create({}, {paper: personPaper.snapPaper});
            //personPaper.show();

            flamePaper = SnapPaper.create();
            flames.push(
                Flame.create(
                    {
                        id: 'bigFlame',
                        color: 'gray',
                        color1: 'orange',
                        color2: 'yellow',
                        speed: 700
                    }, //  state
                    {paper: flamePaper.snapPaper} //  arg to Flame
                )
            );
            flames.push(
                Flame.create(
                    {
                        id: 'bigFlame',
                        color: 'gray',
                        color1: 'blue',
                        color2: 'yellow',
                        speed: 200
                    }, //  state
                    {paper: flamePaper.snapPaper} //  arg to Flame
                )
            );
            flamePaper.show();

            mainMenu.getRootElement().addEventListener('click', function (e) {
                    var selectedValue = e.target.attributes[0].value;
                    // TODO publish selected Value, remove if/else
                    // PubSub.publish(''show" ,'   selectedValue);  selectedValue) = 'flame'
                    flamePaper.hide();
                    personPaper.hide();
                    clockPaper.hide();
                    spinnerPaper.hide();
                    Snap('div.computer').attr({opacity: 0.0});

                    if (selectedValue === 'flame') {
                        flamePaper.show();
                    }
                    else if (selectedValue === 'person') {
                        personPaper.show();
                    }
                    else if (selectedValue === 'clock') {
                        clockPaper.show();
                    }
                    else if (selectedValue === 'computer') {
                        Snap('div.computer').attr({opacity: 1.0});
                    }
                    else if (selectedValue === 'spinner') {
                        spinnerPaper.show();
                    }
                }
            );

        }

        return Controller;
    }
)
;
