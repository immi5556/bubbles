function htmlEncode(value) {
    var encodedValue = $('<div />').text(value).html();
    return encodedValue;
}

var socket, a7com;
$(function () {
    socket = $.connection.fishHub;

    $.connection.hub.start().done(function () {
        console.log("connected..");
    });

    a7com = (function () {

        //var socket = io.connect("http://192.168.1.102:8084");
        //var socket = io.connect("http://49.206.64.209:8084");
        socket.client.itsu = function (data) {
            pageObject.populateMe(data);
        };
        socket.client.newfish = function (data) {
            pageObject.addUser(data);
        };
        socket.client.fishdrop = function (data) {
            pageObject.removeUser(data);
        };
        socket.client.allfishes = function (data) {
            for (fi in data) {
                pageObject.addUser(data[fi]);
            }
        };
        socket.client.received = function (data) {
            pageObject.startConverse(data);
        };
        socket.client.changedisplay = function (data) {
            pageObject.changeDisplay(data);
        };
        socket.client.exceeded = function (data) {
            alert(data);
        };

        var postMessage = function (msg) {
            socket.server.posted(JSON.stringify(msg));
        }

        var changeDisplayname = function (msg) {
            socket.server.displaychange(msg);
        }

        return {
            postMessage: postMessage,
            changeDisplayname: changeDisplayname
        }
    })();
});