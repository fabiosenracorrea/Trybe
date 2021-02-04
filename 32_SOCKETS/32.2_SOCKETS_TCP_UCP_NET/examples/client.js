const net = require('net');

const client = net.connect({ port: 8080 }, () => {
  console.log('Client connected with server!');
});

client.on('data', (data) => {
  console.log(data.toString());
  // client.end();
});

// client.write('Message from the client');

client.on('end', () => {
  console.log('Disconnected from server.');
});
