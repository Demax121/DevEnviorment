const express = require('express');
const app = express();
const port = 3000;

function getTimeString() {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
}

function startServer() {
  const startTime = getTimeString();
  console.log('Server started at: ' + startTime);

  app.use(express.static('public'));

  const server = app.listen(port, () => {
    console.log('Listening on port: ' + port);
  });
}

startServer();
