# Constructor functions

- Creates an object
- Naming a constructor function is different from factory functions
- Since we have two naming types

1. Camel
2. Pascal

## Factory vs Constructors
1. Factory function that returns an object:

     function createCircle(radius) {
         return{
          radius,
          draw() {
            console.log('draw');
          }
         };
     }
  const myCircle = createCircle(1);



2. Constructor function that returns an object: 
    
    function Circle(radius) {
        this.radius = radius; 
        this.draw = ()=>{
            console.log('draw');
        }
    }

    const MyCircle = new Circle(1);