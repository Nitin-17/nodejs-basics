import EventEmitter from "events";

//creating instance
const customEmitter = new EventEmitter();

//on: method allows us to register for an event
//once: listen/register for event only for one time, won't allows us emitting the event again
//emit: allows us to emit or call an event

customEmitter.on("response", (name, id) => {
  console.log(`user: ${name} with id: ${id}`);
});

customEmitter.emit("response", "Nitin", 12121);
