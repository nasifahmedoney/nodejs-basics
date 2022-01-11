const logEvents = require('./logEvents');

const EventEmitter  = require('events');//event core module

class MyEmitter extends EventEmitter {};
//initialize object
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) =>logEvents(msg));//log event

setTimeout(()=>{
    myEmitter.emit('log','log event emitted!');
},2000);