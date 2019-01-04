const io = require('socket.io-client');

const numbers = io.connect('http://localhost:3000/numbers');
const letters = io.connect('http://localhost:3000/letters');

letters.on('letter', (payload) => {
  console.log({payload});
});

letters.on('_letter', (payload) => {
  console.log({payload});
});

letters.emit('join', 'lowercase', (serverResponse) => {
  console.log(serverResponse);
});

numbers.on('number', (num) => {
  console.log({num});
});

numbers.on('_number', (num) => {
  console.log({num});
});

numbers.emit('join', 'negative', (serverResponse) => {
  console.log(serverResponse);
});