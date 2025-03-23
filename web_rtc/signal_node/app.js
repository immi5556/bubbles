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

io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    // Relay signaling messages between peers
    socket.on('signal', (data) => {
        console.log('Received signal from', socket.id, ':', data);
        // Broadcast the signal to the other peer
        socket.broadcast.emit('signal', data);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

server.listen(process.env.PORT || 8080, () => {
    var host = server.address().address
    var port = server.address().port
    console.log(`Socket.IO signaling server is running on port ${port}`);
});