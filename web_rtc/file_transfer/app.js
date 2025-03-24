const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*', // Allow all origins (for testing)
        methods: ['GET', 'POST'],
    },
});

let connections = {};
let senders = [];
let recievers = [];

app.get('/', function (req, res) {
    if (Object.keys(connections).length > 5) res.end("Max users reached!");
    res.sendFile(__dirname + '/file_transfer.html');
});



io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    let userId = assignUserId();
    connections[userId] = '';
    console.log(`user: ${userId} connected`);
    //io.to(socket.id).emit('signal', {
    socket.broadcast.emit('signal', {
        type: "user-id",
        userId: userId
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        senders = senders.filter((id) => id !== userId);
        recievers = recievers.filter((id) => id !== userId);

        delete connections[userId];
        console.log(`user: ${userId} disconnected`);
        sendReceiversList();
    });
    // Relay signaling messages between peers
    socket.on('signal', (msg) => {
        console.log('Received signal from', socket.id, ':', msg);
        // Broadcast the signal to the other peer
        //socket.broadcast.emit('signal', data);

        //let data = JSON.parse(msg.utf8Data);
        let data = msg;
        if (data.type === "sender") {
            senders.push(data.userId);
            sendReceiversList();
        };

        if (data.type === "reciever") {
            recievers.push(data.userId);
            sendReceiversList();
        };

        if (data.type === "initate") {
            socket.to(data.userId).emit({
                //connections[data.userId].send(JSON.stringify({
                type: "join",
                userId: userId,
                target: data.target
            });
        };

        if (data.type === "offer" || data.type === "answer" || data.type === "new-ice-candidate"
            || data.type === "accept-request" || data.type === "request-status") {
            //connections[data.target].send(JSON.stringify(data));
            socket.to(data.target).emit(data)
        };
    });

    const sendReceiversList = () => {
        socket.broadcast.emit('signal', {
            type: "all-recievers",
            userIds: recievers
        });
    };

});
const assignUserId = () => {
    let userId = String(Math.floor(1000 + Math.random() * 9000));

    if (userId in connections) {
        return assignUserId();
    };

    return userId;
};

server.listen(process.env.PORT || 8080, () => {
    var host = server.address().address
    var port = server.address().port
    console.log(`Socket.IO signaling server is running on port ${port}`);
});