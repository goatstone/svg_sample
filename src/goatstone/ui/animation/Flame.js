/*
 goatstone.ui.animation.FlameFactory
 */
define(['stampit', 'Component', 'Snap'],
    function (stampit, Component, Snap) {

        var Flame = stampit({
                draw: function () {
                    this.getRootElement().stop().animate(
                        {
                            fill: this.color,
                            transform: 'translate(' + this.position[0] + ',' + this.position[1] + ')',
                            opacity: this.opacity,
                            d: this.getPath()
                        },
                        this.speed,
                        this.engine.bind(this)
                    );
                },
                update: function () {
                    this.color = (this.color === this.color2) ? this.color1 : this.color2;
                    var randNum = Math.max(0.2, Math.random());
                    this.opacity = randNum;
                    this.radiusTo = this.radiusTo > 10 ? 0 : 15;
                    this.mainPath[5][1] = (Math.random() * 20 - 150);
                    this.mainPath[3][5] = (Math.random() * 70 + 200);
                    this.mainPath[1][5] = (Math.random() * 60 - 30 );
                    this.mainPath[5][3] = (Math.random() * 60 - 30 );
                    this.position[0] = this.position[0] + Math.random() * 10 - 5;
                    this.position[1] = this.position[1] + Math.random() * 10 - 5;
                },
                stop: function () {
                    this.isRunning = false;
                },
                start: function () {
                    this.isRunning = true;
                    this.draw();
                },
                engine: function () {
                    if (!this.isRunning)return;
                    this.update();
                    this.draw();
                },
                getPath: function () {
                    return Snap.path.toRelative(this.mainPath);
                }
            },
            {
                position: [210, 100],
                mainPath: [
                    ['m', 0, 0],
                    ['C', -190, 150, -40, 100, -30, 190],
                    ['C', -20, 320, 130, 220, 130, 360],
                    ['C', 315, 335, 425, 133, 230, 30],
                    ['C', 235, 35, 325, 133, 130, 140],
                    ['C', -135, 35, 125, 33, 0, 0],
                    ['Z']
                ],
                isRunning: true,
                pivot: [0, 0],
                color: 'blue',
                color1: 'red',
                color2: 'green',
                speed: 5000,
                opacity: 0.2,
                scale: 1
            },
            function (conf) {
                var paper = conf && conf.paper ? conf.paper : new Snap(400, 400);
                if (conf && conf.paper) {
                    paper = conf.paper;
                }
                else {
                    throw 'Instance of Snap element required.';
                }
                this.setRootElement(paper.path(this.getPath()));
                this.draw();
            });

        var FlameFactory = stampit().compose(Component, Flame);

        return FlameFactory;
    });