/*
 goatstone.ui.animation.FlameFactory
 */
define(['stampit', 'Component', 'Snap'],
    function (stampit, Component, Snap) {

        var Flame = stampit({
                renderPoints: function () {
                    // clean up the old
                    this.paper.removeClass('points');
                    var g = this.paper.g().attr({class: 'points'});
                    this.mainPath.forEach((function (e, i) {
                        if (e[0].toLowerCase() === 'z')return;

                        var x = (e[0] === 'm') ? e[1] : e[5];
                        var y = (e[0] === 'm') ? e[2] : e[6];
                        var c = this.paper.circle().attr({
                            fill: 'blue',
                            r: 15,
                            cx: x,
                            cy: y
                        });
                        var t = this.paper.text(x, y, ' ' + i).attr({stroke: 'red', fill: 'white'});

                        var handle1;
                        var handle2;
                        if (e[0].toLowerCase() === 'c') { // display handles
                            handle1 = this.paper.circle().attr({
                                fill: 'white',
                                r: 5,
                                cx: e[1],
                                cy: e[2]
                            });
                            var t1 = this.paper.text(e[1], e[2], '' + i);
                            handle2 = this.paper.circle().attr({
                                fill: 'black',
                                r: 5,
                                cx: e[3],
                                cy: e[4]
                            });
                            var t2 = this.paper.text(e[3], e[4], ' ' + i);
                            g.add(handle1, t1);
                            g.add(handle2, t2);
                        }

                        g.add(c);
                        g.add(t);
                        g.transform('translate(' + this.position[0] + ' ,' + this.position[1] + ' )');

                    }).bind(this));
                },
                render: function () {
                    this.flame.stop().animate(
                        {
                            fill: this.color,
                            //transform: 's' + this.scale + 'r' + this.radiusTo + ' ' + this.pivot[0] + '  ' + this.pivot[1],
                            transform: 'translate(' + this.position[0] + ',' + this.position[1] + ')',
                            opacity: this.opacity,
                            d: this.getPath()
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
                    //this.scale = Math.max(0.2, Math.random() * 1.3);
                    this.mainPath[5][1] = (Math.random() * 20 - 150);
                    this.mainPath[3][5] = (Math.random() * 70 + 200);
                    this.mainPath[1][5] = (Math.random() * 40 - 30 );
                    this.position[0] = this.position[0] + Math.random() * 10 - 5;
                    this.position[1] = this.position[1] + Math.random() * 10 - 5;
                    //this.pivotX = this.pivot[0] + Math.floor( Math.random()*15 );
                    //this.renderPoints();
                    this.render();
                },
                getPath: function () {
                    return Snap.path.toRelative(this.mainPath);
                }
            },
            {
                id: '[ Flame ]',
                position: [210, 100],
                mainPath: [
                    ['m', 0, 0],
                    ['C', -190, 150, -40, 100, -30, 190],
                    ['C', -20, 320, 130, 220, 130, 230],
                    ['C', 315, 335, 425, 133, 230, 30],
                    ['C', 235, 135, 325, 133, 130, 180],
                    ['C', -135, 35, 125, 33, 0, 0],
                    ['Z']
                ],
                pivot: [0, 0],
                pivotX: 0,
                radiusTo: 15,
                color: 'blue',
                color1: 'red',
                color2: 'green',
                speed: 5000,
                opacity: 0.2,
                scale: 1
            },
            function (conf) {
                this.id = conf && conf.id ? conf.id : this.id;
                this.paper = conf && conf.paper ? conf.paper : new Snap(400, 400);
                this.flame = this.paper.path(this.getPath())
                    .attr({
                        fill: "red",
                        transform: 'translate(' + this.position[0] + ',' + this.position[1] + ')'
                    });
                this.render();
                this.setRootElement(this.flame);
            });

        var FlameFactory = stampit().compose(Component, Flame);

        return FlameFactory;
    });