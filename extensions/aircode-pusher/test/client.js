import {Client as Pusher} from '../src/index.js';

const pusher = new Pusher('http://localhost:3000/hello');

// Establish a connection to the service and retrieve all the channels the server has subscribed to.
const channels = await pusher.connect();
// To listen for data
channels[0].bind('test-event', (data) => {
  console.log(data);
});
// To send data
channels[0].send('test-event', 'hello');