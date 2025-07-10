/* 
What is Module wrapper? 
>> Everytime we run our code, it's wrapped inside an IIFE(immediately Invoked Function Expression)
*/

(function (exports, require, module, __filename, __dirname) {
  //<code>
})();

console.log(__filename); //gives us the path of file
console.log(__dirname); //gives us the dir name
