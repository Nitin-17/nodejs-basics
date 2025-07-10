/* 
What are modules? 
>> Modules are a way to pass the code from one file to another so we can reuse the code and doesn't have to duplicate the code

*/

//This will allows us to use the function from greet.js file
const greet = require("./greet");
const { person_1, person_2, person_3 } = require("./persons");

greet(person_1);
greet(person_2);
greet(person_3);
