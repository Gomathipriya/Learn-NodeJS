var events = require('events');
var eventEmitter = new events.EventEmitter;

var myEventHandler = function(){
    console.log("Event triggered");
}

eventEmitter.on('stream',myEventHandler);

eventEmitter.emit('stream');
