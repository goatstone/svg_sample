/*
 goatstone.ui.svg.SnapPaper

 * */
define(['stampit', 'Component', 'Snap'],
    function (stampit, Component, Snap) {

        var SnapPaper = stampit({},
            {
                id: '[ SnapPaper ]',
                position: [0, 0],
                snapPaper: null
            },
            function (conf) {
                var el;
                if (conf && conf.snapPaperElementName) {
                    el = document.querySelector(conf.snapPaperElementName);
                    this.setRootElement(el);
                    this.snapPaper = new Snap(el);

                } else {
                    el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    el.setAttribute('class', 'snappaper');
                    el.setAttribute('width', '100%');
                    el.setAttribute('height', '100%');
                    document.body.appendChild(el);
                    this.setRootElement(el);
                    this.snapPaper = new Snap(el);
                }
            });

        return stampit().compose(Component, SnapPaper);
    });