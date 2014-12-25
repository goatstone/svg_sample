/*
 goatstone.ui.animation.FlameFactory

 */
define(['stampit', 'Component', 'Snap'],

    function (stampit, Component, Snap) {

        var Flame = stampit({
                render: function () {
                    this.flame.stop().animate(
                        {
                            fill: this.color,
                            transform: 'r' + this.radiusTo + ' 150 250',
                            opacity: this.opacity
                        },
                        this.speed,
                        this.update.bind(this)
                    );
                },
                update: function () {
                    this.color = (this.color === this.color2) ? this.color1 : this.color2;
                    var randNum = Math.max(0.3, Math.random());
                    this.opacity = randNum;
                    this.radiusTo = this.radiusTo > 10 ? 0 : 15;

                    this.render();
                }
            },
            {
                id: '[ Flame ]',
                pos: [20, 20],
                radiusTo: 15,
                color: 'blue',
                color1: 'red',
                color2: 'green',
                speed: 5000,
                opacity: 1.0
            },
            function (conf) {
                this.id = conf && conf.id ? conf.id : this.id;
                var paper = conf && conf.paper ? conf.paper : new Snap(400, 400);

                this.flame = paper.path("m 150,70 c 36.47884,79.7699 -50.57747,123.60514 -13.12943,134.8303 19.07538,84.39882 41.57753,1.84615 50.17858,74.0624 12.64148,63.8947 94.36373,9.96107 119.44703,-10.58513 18.53945,-28.26025 28.00126,-32.57984 29.10384,-63.39877 0.24262,-56.0894 -110.88613,-99.26346 -62.51384,-174.84841 -75.61557,20.11538 39.19727,206.11519 -23.14052,204.83226 -133.31155,-3.2487 11.53813,-170.3054 -99.94566,-164.89265 z")
                    .attr({
                        fill: "red",
                        stroke: "#bada55",
                        strokeWidth: '0'
                    });
                this.render();
                this.setRootElement(this.flame);
                //this.hide();

            });

        var FlameFactory = stampit().compose(Component, Flame);

        return FlameFactory;
    });