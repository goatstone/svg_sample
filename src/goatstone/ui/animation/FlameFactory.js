/*
 goatstone.ui.Component
 */
define(['stampit', 'Component'],

    function (stampit, Component) {

        var Flame = stampit({
                toString: function () {
                    return 'Flame';
                },
                draw: function () {
                    this.getRootElement().style.width = '100px';
                },
                fm: function () {
                    //console.log('fm');
                }
            },
            {id: '[ Flame ]'},
            function (conf) {
                this.id = conf && conf.id ? conf.id : this.id;
                this.getSpeed = function () {
                    return 'id';
                };
                this.setSpeed = function () {

                };
                //  set up the element
                this.show();
                this.setBG('peru');
                this.draw();

            });
        var FlameFactory = stampit().compose(Component, Flame);

        return FlameFactory;
    });
