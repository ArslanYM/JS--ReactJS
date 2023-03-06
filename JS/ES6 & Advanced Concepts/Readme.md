# ES6 
- Newer version of JS
## Scoping in var ,  let and const 
- Example 1 in index.js
- var -> scope is in function
- let -> scope is in block
- const -> scope is in block 
 - const value cannot change once initialized

# Object Destructuring
- conventionally :     
  const address =  {
    street: ' ',
    city: ' ',
    country:' ' 
  };
  - if we want to access street 
  - either we can : 
    const street = address.street;
  - Or we can :
    const {street} = address;


# Spread Operator
- Lets us combine two arrays 
- Let's say we have two arrays , arr1 and arr2 and we want a resultant array which combines the two
 -      const arr1 = {1,2,3,4,5};
       const arr2 = {6,7,8,9,10};
  
      - Conventionally:
       const combined = arr1.concat(arr2);
      - Using spread operator: 
       const combined = [...arr1, ...arr2]
- Key difference between concat and spread is we can add elements in between too 
  - Example : 
   - const combined = [...arr1, 'a' , 'b' , ...arr2];
   - This will add 'a' and 'b' in the middle of combined array

- Also lets us clone any array easily using ... 
- We can also combine objects
  - Example : 
    const first = {name:'arsalan'};
    const second = {location:'srinagar'};
    const combined = {...first,...second, Country:'India'};
    If we log combined , we will get the combination object of all three properties
 - Also lets us clone objects using ... 


# Classes
- Lets say we want to create two objects which have different name but have a similar method ,eg walk();
- We can create classes which are blueprints for objects 

- Example :
  class Person {
     constructor(name) {
        this.name = name;
     }
     walk() {
        console.log('walk');
     }
  }

  - To create a person object 
     const person1 = new Person("John");
      - This will create a new object with name prop as John and method walk();  
    const person2 = new Person("Malik");
      - This will create a new object with name prop as Malik and method walk();  


# Inheritance 
