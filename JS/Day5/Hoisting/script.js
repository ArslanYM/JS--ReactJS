//example1
greet();
function greet() {
    console.log("hello world");}
//logs hello world
//Here  we call the fucntion before it is defined

//example2
console.log(a);
var a = 10;
console.log(a);
//logs undefined and 10


//example3
console.log(b);
let b = 10;//error



//example4
greeting();
var greeting = ()=>{
    console.log("hello world");
    //error
}
