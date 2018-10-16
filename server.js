import chalk from 'chalk';
const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  socket.close();
});

socket.on('message', (msg, rinfo) => {
  console.log(chalk.green(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`));
//   console.log(chalk.green('Server started on port ' + chalk.yellow(process.env.PORT || 3000)))
});

socket.on('listening', () => {
  const address = socket.address();
  console.log(chalk.greenBright(`server listening ${address.address}:${address.port}`));
});

//This server will now listen at 127.0.0.1:3000
socket.bind({
  address: 'localhost',
  port: 3000,
  exclusive: false
});

// socket.bind(41244);
// server listening 0.0.0.0:41244


// import chalk from 'chalk'
// const io = require('socket.io')(process.env.PORT || 3000)

// console.log(chalk.green('Server started on port ' + chalk.yellow(process.env.PORT || 3000)))

// let playerCount = 0

// io.on('connection', (socket) => {
//     console.log('client connected, broadcasting spawn')

//     socket.broadcast.emit('spawn')
//     playerCount++;

//     for(let i = 0; i < playerCount; i++) {
//         console.log('Sending spawn to new player')
//         socket.emit('spawn')
//     }

//     socket.on('move', () => {
//         console.log('Client moved')
//     })

//     socket.on('disconnect', () => {
//         console.log('client diconnected')
//         playerCount--
//     })
// })