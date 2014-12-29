/*
 goatstone.ui.Component
 */
define(['stampit', 'PubSub'],
    function (stampit, PubSub) {

        var Component = stampit({
                sub: function (topic, message) {
                    console.log('C : Sub');
                    PubSub.subscribe(topic, message);
                    return 'sub';
                },
                pub: function (topic, callback) {
                    var token = PubSub.publish(topic, callback);
                    return 'pub';
                },
                show: function (b) {
//                    console.log('Component 1::::::: ',this);
//                    console.log('Component 2: ', this.getRootElement() );

//                    var svg_item = Snap(300, 300);
////                    svg_item.root.node.id = "main_svg";
//                    svg_item.root.node.style.pointerEvents = "none";

                    this.getRootElement().style.visibility = 'visible';
                    this.getRootElement().style.display = 'block';
                    this.getRootElement().style.opacity = 1.0;
                },
                hide: function () {
                    this.getRootElement().style.visibility = 'hidden';
                    this.getRootElement().style.display = 'none';
                },
                toggle: function () {
                    if (this.getRootElement().style.display === 'none') {
                        this.show();
                    } else {
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
