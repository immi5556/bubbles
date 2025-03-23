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

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client.html');
});

let socket_id = [];

io.on('connection', (socket) => {
    console.log('Client connected:', socket.id, socket_id);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        if (socket_id.indexOf(socket.id) > -1) socket_id.splice(socket_id.indexOf(socket.id), 1);
    });

    if (socket_id.length == 2) {
        setTimeout(() => {
            io.to(socket.id).emit('crowded', 'no slot available');
            console.warn('socket excceded...', socket.id, socket_id);
        }, 2000);
        return;
    }
    socket_id.push(socket.id);
    if (socket_id.length == 2) { // emable start button for user-1
        socket.to(socket_id[0]).emit("start_enable", 'enable start');
    }
    // Relay signaling messages between peers
    socket.on('signal', (data) => {
        console.log('Received signal from', socket.id, ':', data);
        // Broadcast the signal to the other peer
        socket.broadcast.emit('signal', data);
    });
});

server.listen(process.env.PORT || 8080, () => {
    var host = server.address().address
    var port = server.address().port
    console.log(`Socket.IO signaling server is running on port ${port}`);
});