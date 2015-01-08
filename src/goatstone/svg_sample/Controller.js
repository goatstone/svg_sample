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
            spinnerPaper.sub('spinner', function (arg, data) {
                spinnerPaper.show();
            });
            spinner = SpinnerFactory.create({}, {paper: spinnerPaper.snapPaper});

            clockPaper = SnapPaper.create();
            clockPaper.sub('clock', function () {
                clockPaper.show();
            });
            Clock.create({}, {paper: clockPaper.snapPaper});

            personPaper = SnapPaper.create({}, {snapPaperElementName: 'svg.person'});
            personPaper.sub('person', function () {
                personPaper.show();
            });
            PersonFactory.create({}, {paper: personPaper.snapPaper});

            flamePaper = SnapPaper.create();
            flamePaper.show();
            flamePaper.sub('flame', function () {
                flamePaper.show();
            });
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

            Array.prototype.forEach.call(
                mainMenu.getRootElement().getElementsByTagName('button'),
                eachButton
            );
            function eachButton(el) {
                el.addEventListener('click', function (e) {
                    flamePaper.hide();
                    personPaper.hide();
                    clockPaper.hide();
                    spinnerPaper.hide();
                    PubSub.publish(this.value);
                    Snap('div.computer').attr({opacity: 0.0});
                    if (this.value === 'computer') {
                        Snap('div.computer').attr({opacity: 1.0});
                    }
                })
            }
        }

        return Controller;
    }
)
;
