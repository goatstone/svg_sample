/*
 goatstone.ui.Component
 */
define(['stampit'],
    function (stampit) {

        var Component = stampit({
                sub: function (a) {
                    return 'sub';
                },
                pub: function (a) {
                    return 'pub';
                },
                show: function (b) {
                    this.getRootElement().style.visibility = 'visible';
                    this.getRootElement().style.display = 'block';
                },
                hide: function () {
                    this.getRootElement().style.visibility = 'hidden';
                    this.getRootElement().style.display = 'none';
                },
                toggle:function(){
                 if(this.getRootElement().style.display === 'none'){
                     this.show();
                 }else{
                     this.hide();
                 }
                }
            },
            {
                id: ' [ Component ] '
            }, function () {
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
