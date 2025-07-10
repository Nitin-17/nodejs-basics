/* 
What is Path module?
In Node.js, the path module is a built-in core module that provides utilities for working with file and directory paths in a way that is cross-platform
*/

import path from "path";

console.log(path.basename("c:\\nodejs\\index.js")); //allows us to get the last portion of path
console.log(path.basename("c:\\nodejs\\index.js", ".js")); //getting rid of .js extension

console.log(path.dirname("c:\\nodejs\\courses\\index.js")); //give us the directory name

console.log(path.extname("c:\\nodejs\\index.html")); //allows us to get the file extension

console.log(path.join("c:", "nodejs", "basics")); //generate a path based of the provided strings

console.log(path.join("c:", "nodejs", "basics", "..")); //will ommit the basics dir and gives us the path before it. Can give more than one ..

console.log(path.normalize("c:\\courses\\redux\\reducer")); // clean up and standardize the file path string

console.log(path.parse("c:\\courses\\redux\\reducer.js")); //returns an object whose properties represent significant elements to the path

console.log(path.parse("c:\\courses\\redux\\reducer.js").base);
console.log(path.parse("c:\\courses\\redux\\reducer.js").name);
console.log(path.parse("c:\\courses\\redux\\reducer.js").ext);
