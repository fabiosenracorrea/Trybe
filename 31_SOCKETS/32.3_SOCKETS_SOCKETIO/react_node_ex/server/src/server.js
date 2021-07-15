require('dotenv');

const express = require('express');
const app = express();
const http = require('http').createServer(app);

const cors = require('cors');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }
});

app.use(cors());

const appRoutes = require('./routes');

app.use(express.json());

app.use(appRoutes);

let currentID = 1;
const messages = []

io.on("connection", (socket) => {
  const clientID = currentID;
  currentID += 1;

  socket.emit('history', messages);
  socket.emit('ola', { mensagem: 'Bem vindo!', id: clientID });

  socket.broadcast.emit('mensagemServer', { mensagem: 'Alguem acabou de se conectar.'});

  socket.on('disconnect', () => {
    socket.broadcast.emit('mensagemServer', { mensagem: `Client ID ${clientID} has left`});
  });

  socket.on('message', (msg) => {
    const newMsg = { message: msg, id: clientID };

    messages.push(newMsg);

    console.log('e');

    io.emit('messageServer', newMsg);
  });
});

http.listen(3333, () => console.log('Server Started'));
