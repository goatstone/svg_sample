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
                this.id = conf && conf.id ? conf.id : this.id;
                this.paper = conf && conf.paper ? conf.paper : new Snap(400, 400);
                //console.log('Person', conf);
                this.element = this.paper.select('g path:nth-child(3)' );
                //    .attr({  Snap.select('.person g path:nth-child(3)'
                //        fill: "red",
                //        transform: 'translate(' + this.position[0] + ',' + this.position[1] + ')'
                //    });
                this.render();
                //this.setRootElement(this.flame);
            });

        var PersonFactory = stampit().compose(Component, Person);

        return PersonFactory;
    });