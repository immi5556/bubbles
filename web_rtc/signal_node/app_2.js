//import express from 'express'
const express = require('express');
//import * as http from 'http';
const http = require('http');
//import { WebSocketServer, WebSocket } from 'ws';
const WebSocket = require('ws');
//import path from 'path';


const app = express();
const server = http.createServer(app);
//const wss = new WebSocketServer({ server });
const wss = new WebSocket.Server({ server });

//const __dirname = path.resolve();

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
                console.log('Clients:', client);
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