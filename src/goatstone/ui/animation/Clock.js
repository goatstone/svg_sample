/*
 goatstone.ui.animation.Clock
 author  :  Jose Collas : 12.26.2014
 * */
define(['stampit', 'Component', 'Snap'],
    function (stampit, Component, Snap) {

        var Clock = stampit({
                render: function () {
                    this.nums.stop().animate(
                        {transform: 't0,0r360'},
                        6000,
                        this.update.bind(this)
                    );
                },
                update: function () {
                    this.render();
                },
                spin: function () {
                    Snap.animate(360, 0, function (val) {
                        this.spinPoint = val;
                        this.draw();
                    }.bind(this), 12000, function () {
                        this.spin();
                    }.bind(this));
                },
                draw: function () {
                    var steps = 12;
                    var a = this.nums.selectAll('tspan');
                    a.forEach(
                        function (e, i) {
                            var x = this.left + this.radius * Math.cos(Snap.rad(i / steps * 360 + this.spinPoint));
                            var y = this.top + this.radius * Math.sin(Snap.rad(i / steps * 360 + this.spinPoint));
                            e.attr({x: x, y: y});
                            var selectedInt = 12 - Math.floor(this.spinPoint / 30);
                            if (selectedInt === (i + 1)) {
                                e.attr({fill: 'cyan', stroke: 'cyan', fontSize: '44px'});
                                e.attr({x: this.displayX, y: this.displayY});
                            }
                            else {
                                e.attr({fill: 'gren', stroke: 'green', fontSize: '24px'});
                            }


                        }, this);
                }
            }, {
                id: '[ Clock ]',
                position: [210, 100],
                radiusTo: 0,
                displayX: 190,
                displayY: 90
            },
            function (conf) {
                //this.id = conf && conf.id ? conf.id : this.id;
                if (conf && conf.paper) {
                    this.paper = conf.paper;
                }
                else {
                    throw 'Instance of Snap must be provided.';
                }
                this.paper.addClass('clock');
                this.nums = this.paper.text(30, 30, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).attr({
                    fontSize: "24px",
                    textAnchor: "top"
                });
                this.radius = 70;
                this.spinPoint = 360;   // degree point on circle
                this.top = 100;
                this.left = 120;
                this.draw();
                this.spin();
                //this.render();
            });
        var ClockFactory = stampit().compose(Component, Clock);

        return ClockFactory;
    });