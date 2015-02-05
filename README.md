#SVG Samples

###Web Site Location:
 [http://svg.goatstone.com](http://svg.goatstone.com "http://svg.goatstone.com")

###GIthub: 
[https://github.com/goatstone/svg_sample](https://github.com/goatstone/svg_sample "https://github.com/goatstone/svg_sample")


SVG Samples is a series of SVG (Scalable Vector Graphics) graphics that demonstrate various techniques for working with SVG.

SVG is a format that is promising to become quite widely used. Its benefits over other image rendering technologies are well documented.

Presented are 5 different graphics: Flame, Person, Clock, Computer, Spinner

The computer image  graphic is created with the application InkScape ( [https://inkscape.org ](https://inkscape.org "https://inkscape.org")). Once the the graphic is created in the vector drawing program it can simply be brought into the HTML page. In this case I have removed all the InkScape related tags as they are not needed in the HTML.

In the case of the other graphics that employ animation a combination of CSS, the Snap JavaScript library ( [http://snapsvg.io/](http://snapsvg.io/ "http://snapsvg.io/") ) and recursive JavaScript calls render the motion.

Each graphic is represented by a single object in JavaScript. These objects are created with the library StampIt ( [https://github.com/ericelliott/stampit ](https://github.com/ericelliott/stampit "https://github.com/ericelliott/stampit") ). The modular nature of the code enables the graphic to be an independent component. These distinct components know nothing about the other components and all application messaging is done with the Publish/Subscribe pattern. This code can be found  primarily in the Controller class and is implemented with the library PubSub.js ( [https://github.com/mroderick/PubSubJS](https://github.com/mroderick/PubSubJS "https://github.com/mroderick/PubSubJS") ).

It is my intent to establish and document various SVG Samples that can be referenced when making decisions about creating animations for the web.

Jose Collas, February, 2015

 

 
