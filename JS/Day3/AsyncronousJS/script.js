//Syncronous JS
console.log("I");
console.log("Eat");
console.log("Icecream");
console.log("with");
console.log("a");
console.log("spoon");
//JS runs the code from top to bottom, line by line

//Asyncronous JS

console.log("I");
console.log("Eat");
setTimeout(()=>{
    console.log("icecream");
}, 3000);
console.log("with");
console.log("a");
console.log("spoon");


//Callbacks
//A callback is a function that is passed as an argument to another function and is executed after some operation has been completed.
function one(call_two) {
    console.log("one completed");
    call_two();
}
function two() {
    console.log("two");
}

one(two);
//one completed
//two also gets printed


//Understanding Callbacks more...

let order = (call_production)=> {
 console.log("Order placed");
 call_production();
};

let production = ()=>
{
 console.log("Production started");
};

order(production);
//Order placed , Production started gets printed in console!

//Understanding relation of frontend and backend
//Frontend is the part of the website that the user interacts with. It is the part that the user sees.
//Backend is the part of the website that the user does not interact with. It is the part that the user does not see.

//Imagine working at an icecream shop.
let stock = { 
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};


let order1 = (Fruit_name, call_production1) =>{
    setTimeout(()=>{
        console.log(`${stock.Fruits[Fruit_name]} was selected`);
        call_production1();
    }, 2000);
};

//callback hell
// let production1 = () =>{
//     setTimeout(()=>{
//          console.log("production has started");
//      setTimeout(()=>{
//           console.log("the fruit has been chopped");
//       setTimeout(()=>{
//           console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);
//         setTimeout(()=>{
//            console.log("the machine was started");
//           setTimeout(()=>{
//              console.log(`icecream placed on ${stock.holder[1]}`);
//             setTimeout(()=>{
//                 console.log(`${stock.toppings[0]} was selected as toppings`);
//                 setTimeout(()=>{
//                     console.log("serve icecream");
//               },3000);
//              },2000);
//           },1000);
//         },1000);
//      }, 2000);
//    }, 000);
// },1000);

// order1(0, production1);




//Promises
//Saves us from callback hell

 