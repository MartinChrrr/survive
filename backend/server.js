// var express = require ('express');

// var app = express();
// var server = app.listen(3000);

// app.use(express.static('public'))

// var socket = require("socket.io");

// var io = socket(server);

// io.on('connection', (socket)=>{socket.on('disconnect',()=>{console.log('player diconnected')} )});

// function newConnection (socket) {
//     console.log('new connexion:' + socket.id);
//     //console.log(socket);
//     socket.on('pos', (data)=>{socket.broadcast.emit('pos', data)} );
// }

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('a user connected: ' + socket.id);

    // Ecoute de la déconnexion
    socket.on('disconnect', () => {
        console.log('user disconnected: ' + socket.id);
    });

    // Ecoute de la position du joueur
    socket.on('pos', (data) => {
        // Envoi de la position du joueur à tous les autres clients
        socket.broadcast.emit('pos', data);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});