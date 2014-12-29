/*
 goatstone.ui.Component
 */
define(['stampit'],
    function (stampit) {

        var Component = stampit({
                sub: function (a) {
                    return 'sub';
                },
                pub: function  (a) {
                    return 'pub'
                },
                show: function (b) {
                    this.getRootElement().style.opacity = 1;
                    return this.id;
                },
                hide: function () {
                    console.log('hide');
                    this.getRootElement()
                        .attr({
                            display:'none'
                        });
                    return 'hide';
                }
            },
            {
                id: ' [ Component ] '
            }, function (){
                // root Snap elemnt
                var rootElement;                
                this.getRootElement = function () {
                    return rootElement;
                };
                this.setRootElement = function (el) {
                    rootElement = el;
                };
            }
        );

        return Component;
    });
