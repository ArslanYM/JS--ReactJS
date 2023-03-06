//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const myCircle = createCircle(1);




//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const MyCircle = new Circle(1);