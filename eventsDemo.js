import { EventEmitter } from 'events';

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// greet handler
function greetHandler(name) {
    console.log('Hello, ' + name);
}

//goodbye handler
function goodbyeHandler(name) {
    console.log('Goodbye, ' + name);
}

// event listeners
eventEmitter.on('greet', greetHandler);
eventEmitter.on('goodbye', goodbyeHandler);

// emit events
eventEmitter.emit('greet', 'Alice');
eventEmitter.emit('goodbye', 'Alice');

//error handler
eventEmitter.on('error', (err) => {
    console.error('Error occurred: ' + err.message);
});

//simulate an error
eventEmitter.emit('error', new Error('Something went wrong'));