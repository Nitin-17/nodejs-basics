/* 
V8 Engine: It converts JS code into Machine code so that machine can understand. It is written in C++
Libuv: Open-source library with a focus of async I/O. It's a multi-platform support library with a focus on async I/O. It was developed for Node.js.
    It is written in C++. 
    Features: FS Events, Async DNS resolution, Async FS operations, Event Loop

Other dependencies Nodejs is depends on: Llhttp, c-ares, OpenSSL, Zlib

Threads: each unit capable of executing code is called thread.
e.g; program such as multiply(2, 3) or readfile or writefile

Event Loop: It is generated in the thread & role of this loop is to schedule which operations our thread should be performing at any given point.

Callback function: 
>> Callback is an asynchronous equivalent for a function.
>> A callback function is called at the completion of a given task.
>> Callback help us in preventing from the blocking of the code.
>> Node makes heavy use of callbacks.
*/

//example of blocking code without callbacks
const fs = require("fs");
const path = require("path");
console.log("Start");

let data = fs.readFileSync(path.join(__dirname, "test.txt"), "utf-8");
console.log(data);
console.log("Ended");

/* 
Output:
Start
Content from test.txt file :0
Ended
*/

//----------------------
//with callbacks

console.log("program Start");

fs.readFile(path.join(__dirname, "test.txt"), "utf-8", (err, res) => {
  if (err) {
    console.log("Error reading file:", err);
  } else {
    console.log(res);
  }
});

console.log("Ended");

/* 

What is node process?

Single Thread and inside it we're doing following things:
>> initialize program
>> import modules
>> register callbacks
>> start the event loop (only start for heavy data computations like; reading large data from a file)

Once loop starts, it will provide us a thread pool with 4 threads. All the expensive data settings will be put in these threads.


*/
