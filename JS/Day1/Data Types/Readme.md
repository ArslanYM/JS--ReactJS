## Data Types in JS

- strings
- numbers
- booleans
- arrays
- objects 
- undefined
- null

# Strings
     const backticks = `${2 + 2}`; //data type string. 
     We can use backticks to create complex strings , 
     We can use variables inside backticks using '${variableName}    ';
     const exampleString = "Hello World"; //data type string
     console.log(backticks); //prints 4
     console.log(exampleString); //data type string
     we can also use single quotes there is no difference

# Numbers
    We dont have to specify float or int , js   will 
    automatically detect it
    const decimalnumber = 10.5; //data type number
    const wholeNumber = 10; //data type number
    console.log(wholeNumber); //prints 10
    console.log(decimalnumber); //prints 10.5
    console.log(wholeNumber + decimalnumber); //prints 20.5
    console.log(exampleString / wholeNumber); //prints NaN ,
     which means Not a Number. We cant divide a     string by a number.

# Booleans
    Booleans are either true or false
    They are either 0 or 1

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

# NULL
    Null is an empty value
    const factor = null;
    console.log(factor); //prints null
    console.log( typeof factor); //prints object!! ,
     this is a bug in js

# UNDEFINED
     Undefined is a variable that has not been defined
    let name; //we have not defined the variable name
    console.log(typeof name); //prints undefined

# Objects
    //objects are key value pairs
    const myName = 'arsalan';
    const myAge = 22;
    const person = {
        name: 'arsalan',
        age: 22,
    };
    console.log(person); //prints {name: "arsalan", age: 22}
    //We can use DOT notation to tap into the object
    console.log(person.name); //prints arsalan



    //Arrays
    //Arrays are a list of items
    const myArray = [1,2,3,4,5];
    console.log(myArray); //prints [1,2,3,4,5]
    //We can use the index to tap into the array which starts form 0 till size-1
    console.log(myArray[0]); //prints 1
    

    //Dates
    //Dates are a special type of object
    const today = new Date();
    console.log(today); //prints 2023-02-01T12:00:00.000Z



    //Statically typed vs Dynamically typed
    //javascript is a dynamically typed language
      
    let message = "hello world!";
    console.log(typeof message); //prints string

    message = 10;
    console.log(typeof message); //prints number

  