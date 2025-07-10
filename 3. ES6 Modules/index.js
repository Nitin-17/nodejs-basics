//Here's how we import the functions or variable from other files
//Note: use.mjs extension for files or set "type": "module" in package.json (use npm init --y for instant generation of package.json)
//Note: make sure to use .js in import statement
import greet from "./greet.js";
import { person_1, person_2, person_3 } from "./people.js";

greet("Hello, There! Welcome to ES6 Modules");
console.log(person_1, person_2, person_3);

//Now, we can't use __filename or __dirname
