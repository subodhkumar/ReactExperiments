const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an Event Occured');
});

myEmitter.on('event2', () => {
  console.log('an Event2 Occured');
});

myEmitter.emit('event2');
myEmitter.emit('event');
