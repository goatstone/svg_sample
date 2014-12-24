/*
 goatstone.svg_sample.Controller

 * */

//define(["Panel", 'PubSub', 'Message', 'ActionBar', "Menu"],
//    function (Panel, PubSub, Message, ActionBar, Menu) {
define([],
    function () {

        function Controller() {
           // console.log('controller');

            /*
             // message, messagePanel
             message = new Message("#message");
             message.set(
             '<h3>' + model.about.title + '</h3>' +
             '<p>' + model.about.description + '</p>' +
             '<address class="author">' + model.about.author + '</address>' +
             '<a href="/about/" target="new">more...</a>'
             );
             messagePanel = new Panel('#message-panel', {x: window.innerWidth - 330, y: 70});
             messagePanel.subscribe([
             ["messagePanel",
             function (data) {
             if (data.value === 'show') {
             messagePanel.show();
             }
             else if (data.value === 'hide') {
             messagePanel.hide();
             }
             }
             ]
             ]);
             // ActionBar
             new ActionBar('.action-menu-button');
             // menu
             var menu = new Menu('.action-menu', [
             {
             title: 'About AlphaCronke',
             action: function () {
             PubSub.publish('messagePanel', {value: 'show'});
             }
             },
             {
             title: 'Letter Select',
             action: function () {
             PubSub.publish('alphaRangePanel', {value: 'show'});
             }
             },
             {
             title: 'Main Panel',
             action: function () {
             PubSub.publish('mainPanel', {value: 'show'});
             }
             }
             ]);
             menu.hide();
             menu.subscribe([
             ["actionMenu",
             function (data) {
             menu.toggle();
             }
             ]
             ]);
             */

        }

        return Controller;
    });
