const app = require('express')();
const http = require('http').createServer(app);

const cors = require('cors');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }
});

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const messages = [];

let currentID = 1;

io.on("connection", (socket) => {
  const clientID = currentID;
  currentID += 1;

  socket.emit('history', messages);
  socket.emit('ola', { mensagem: 'Bem vindo!', id: clientID });

  socket.broadcast.emit('mensagemServer', { mensagem: 'Alguem acabou de se conectar.'});

  socket.on('disconnect', () => {
    socket.broadcast.emit('mensagemServer', { mensagem: `Client ID ${clientID} has left`});
  });

  socket.on('mensagem', (msg) => {
    const newMsg = { mensagem: msg, id: clientID };

    messages.push(newMsg);

    io.emit('mensagemServer', newMsg);
  });
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
