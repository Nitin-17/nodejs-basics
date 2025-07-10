let person_1 = "Nodejs";
let person_2 = "React.js";
let person_3 = "Nitin";

//if we want to use these name inside other files, we have to tell them that they can use these variables

//for single person use:
//module.exports=person_1;

//for multiple values
module.exports = { person_1, person_2, person_3 };
