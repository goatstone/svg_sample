/*
goatstone.ui.animations.Person.js

 * */
define(['stampit', 'Component', 'Snap'],
    function (stampit, Component, Snap) {

        var Person = stampit({
                render: function () {
                    this.element.stop().animate(
                        {transform: 'r' + this.radiusTo + ' 410 200'},
                        1000,
                        this.update.bind(this)
                    );
                },
                update: function () {
                    this.radiusTo = this.radiusTo > 20 ? 5 : 50;
                    this.render();
                }
            },
            {
                id: '[ Flame ]',
                position: [210, 100],
                radiusTo:0
            },
            function (conf) {
                this.paper = conf && conf.paper ? conf.paper : null;// does not get conf.paper
                this.element = this.paper.select('g path:nth-child(3)' );
                this.render();
            });

        var PersonFactory = stampit().compose(Component, Person);

        return PersonFactory;
    });