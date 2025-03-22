
//const express = require('express');
import express from 'express'
//const http = require('http');
import * as http from 'http';
//const WebSocket = require('ws');
import { WebSocketServer, WebSocket } from 'ws';
import path from 'path';


const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const __dirname = path.resolve();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client.html');
});

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        //console.log(`Received: ${message}`);

        let data;
        if (message instanceof Buffer) {
            // Convert binary data to string
            data = message.toString();
        } else {
            // Already a string
            data = message;
        }

        console.log('Received:', data);


        // Broadcast the message to all other clients
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                //client.send(message);
                //client.send(JSON.stringify(data));
                client.send(data);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.listen(process.env.PORT || 8080, () => {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});

//const express = require("express");
//const http = require("http");
//const { Server } = require("socket.io");


//const app = express();
//const server = http.createServer(app);
//const io = new Server(server);

//app.use(express.static("public")); // Serve static files (our frontend)

//app.get('/', function (req, res) {
//    res.sendFile(__dirname + '/client.html');
//});

//io.on("connection", (socket) => {
//    console.log("A user connected:", socket.id);

//    socket.on("offer", (offer) => {
//        socket.broadcast.emit("offer", offer); // Send offer to other peers
//    });

//    socket.on("answer", (answer) => {
//        socket.broadcast.emit("answer", answer); // Send answer to other peers
//    });

//    socket.on("candidate", (candidate) => {
//        socket.broadcast.emit("candidate", candidate); // Send ICE candidate
//    });

//    socket.on("disconnect", () => {
//        console.log("User disconnected:", socket.id);
//    });
//});

////server.listen(3000, () => {
////    console.log("Signaling server running on http://localhost:3000");
////});

//server.listen(process.env.PORT || 8081, function () {
//    var host = server.address().address
//    var port = server.address().port

//    console.log("Example app listening at http://%s:%s", host, port)
//});