// Async / Await
//Better way to write promises
//Check index for better understanding

let stock = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

//Async function ==>

// async function order() {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc doesnt exist,", error);
//   } finally {
//     console.log("runs regardless of the result");
//   }
// }

// order()
// .then(() => console.log("everything is fine outside!"))

//Await function ==>

// let toppings_choice = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(console.log("which topping would you like?"))
//         },3000)
//     })
// }

// async function kitchen() {
//     console.log("A");
//     console.log("B");
//     console.log("C");
//     await toppings_choice();
//     console.log("D");
//     console.log("E");
// }

// kitchen();
// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking orders from customers");

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stock.Fruits[0]} was selected`);

    await time(0000);
    console.log("production has started");

    await time(2000);
    console.log("the fruit has been chopped");

    await time(1000);
    console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stock.holder[1]}`);

    await time(3000);
    console.log(`${stock.toppings[0]} as toppings`);

    await time(2000);
    console.log("serve ice cream");
  } catch {
    console.log("customer left");
  } finally {
    console.log("day ended, shop is closed");
  }
}

kitchen();
