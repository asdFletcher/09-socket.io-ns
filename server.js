'use strict';

const io = require('socket.io')(3000);

const letters = io.of('/letters');
const numbers = io.of('/numbers');

let counter = 0;
let letter = 'A';

io.on('connect', (socket) => {
  console.log('default connection detected');
});

numbers.on('connect', (socket)=>{
  console.log('numbers connection detected');

  socket.on('join', (room, cb) => {
    console.log(`Connecting someone to the room: ${room}, namespace: Numbes`);
    socket.join(room);
    if (cb){
      cb(`You've joined the room: ${room}`);
    }
  });

  socket.on('next-number', () => {
    socket.broadcast.emit('number', counter);
    socket.broadcast.to('negative').emit('_number', counter * -1);
    incrementNumber();
  });
});

letters.on('connect', (socket)=>{
  console.log('letters connection detected');

  socket.on('join', (room, cb) => {
    console.log(`Sending someone to room: ${room}, namespace: Letters`);
    socket.join(room);
    if (cb){
      cb(`you've joined the room: ${room}`);
    }
  });

  socket.on('next-letter', () => {
    console.log(`The letters are at: ${letter}`);
    socket.broadcast.emit('letter', letter);
    socket.broadcast.to('lowercase').emit('_letter', getLowerCase());
    incrementLetter();
  });
});

function getLowerCase(){
  return letter.toLowerCase();
}

function incrementLetter(){
  let currentLetterCharCode = letter.charCodeAt();
  // if at z reset to A
  if (currentLetterCharCode === 122){
    currentLetterCharCode= 64;
  }
  // if at Z jump to a
  if (currentLetterCharCode === 90){
    currentLetterCharCode = 96;
  }
  let nextLetterCharCode = currentLetterCharCode+1;
  let nextLetter = String.fromCharCode(nextLetterCharCode);
  letter = nextLetter;
}

function incrementNumber(){
  counter++;
}
