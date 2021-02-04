const net = require('net');

const server = net.createServer((connection) => {
  console.log('Client connected');

  server.getConnections((err, count) => {
    console.log(`Number of connections: ${count}`);
  });

  connection.on('data', (data) => {
    console.log(data.toString());
  });

  connection.on('end', () => {
    console.log('Client disconnected');

    server.getConnections((err, count) => {
      console.log(`Number of connections: ${count - 1}`);
    });
  });

  connection.write('Message from the server!\r\n');
  connection.pipe(connection);
});


server.listen(8080, () => {
  console.log('Server on port 8080');
});
