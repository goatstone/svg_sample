/*
 goatstone.ui.animation.SpinnerFactory
 author : Jose Collas : 12.2014
 * */
define(['stampit', 'Component', 'Snap'],
    function (stampit, Component, Snap) {

        var Spinner = stampit({
                spin: function () {
                    Snap.animate(360, 0, function (val) {
                        this.spinPoint = val;
                        this.draw();
                    }.bind(this), 6000, function () {
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
                        }, this);
                }
            }, {
                id: '[ Spinner ]'
            },
            function (conf) {
                if (conf && conf.paper) {
                    this.paper = conf.paper;
                }
                else {
                    throw 'Instance of Snap must be provided.';
                }
                this.paper.addClass('spinner');
                this.nums = this.paper.text(30, 30, ['G', 'O', 'A', 'T', 'S', 'T', 'O', 'N', 'E', '20', '1', '4']).attr({
                    textAnchor: "topc"
                });
                this.animationDuration = 6000;
                this.top = 150;
                this.left = 160;
                this.radius = 90;
                this.spinPoint = 360;   // degree point on circle
                this.draw();
                this.spin();
            });
        var SpinnerFactory = stampit().compose(Component, Spinner);

        return SpinnerFactory;
    });