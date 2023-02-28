 //Functions
//Block of code ==> performs a task
//Functions are reusable
//We cant use names of reserved keywords
//We cant start a name with a number
//Function declaration structure

/*function nameOfFunction(parameters){
  code to be executed
fucntion body
}
*/


//Example
//Defining a fnx doesnt execute it
//Function call executes it!!
function greet(){
    console.log("Hello there");
}
//Function call(invoking the function)
greet();


//example 2
function square(number){
  return number * number;
}
//Function call
var result = square(2);
console.log(result);
//A function can have multiple parameters



//A function expression

function name1(parameters){
 //statements
 //we can only use this keyword in these decalarations

}
const name2 = function(parameters){
  //statements
}
//An arrow function
const name3 = (parameters) => {
  //statements
}


//example 3
function greeting(name) {
  console.log("Hello " + name);
}
greeting("John");//Function call
greeting("Mary");//Function call


//Return statement
const add = ( a,b)=>{
  return a + b;
  return a - b;//wont execute
  //only first return statement will execute
}
const result = add(2,3);
console.log(result);//5


//Example 4
const sq = (a) => a*a ;
const result2 = sq(2);
console.log(result2);//4

