//single line comment using "//"
/*This 
is 
a
 multi-line 
 comment
 */

//Data Types
//strings
//numbers
//booleans
//arrays
//objects
//functions
//undefined
//null

//Strings
const backticks = `${2 + 2}`; //data type string. We can use backticks to create complex strings , We can use variables inside backticks using '${variableName}';
const exampleString = "Hello World"; //data type string
console.log(backticks); //prints 4
console.log(exampleString); //data type string
//we can also use single quotes there is no difference

//Numbers
//We dont have to specify float or int , js   will automatically detect it
const decimalnumber = 10.5; //data type number
const wholeNumber = 10; //data type number
console.log(wholeNumber); //prints 10
console.log(decimalnumber); //prints 10.5
console.log(wholeNumber + decimalnumber); //prints 20.5
console.log(exampleString / wholeNumber); //prints NaN , which means Not a Number. We cant divide a string by a number.

//Booleans
//Booleans are either true or false
//They are either 0 or 1
const isCool = true;
if (isCool) {
  console.log("hey youre cool!!");
} else {
  console.log("hey youre not cool!!");
}

const age = 18;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cant vote");
}

//NULL
//Null is an empty value
const factor = null;
console.log(factor); //prints null
console.log( typeof factor); //prints object!! , this is a bug in js

//UNDEFINED
//Undefined is a variable that has not been defined
let name; //we have not defined the variable name
console.log(typeof name); //prints undefined
