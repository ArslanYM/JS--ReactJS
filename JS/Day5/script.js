//forEach
var arr = [1, 2, 3, 4, 5];
var sum =0;
//forEach  can take 3 arguments 
//1. item
//2. index
//3. array
arr.forEach((item, index, array)=>{
    console.log(item);//1,2,3,4,5
    sum+=item;
});
console.log(sum);//15

//Use Case:
var letters = ['a', 'b', 'c', 'd', 'e'];
let count = 0;
letters.forEach((item, index, array)=>{
    if(count[item]){
        count[item]++;
    }else{
        count[item] = 1;
    }
});

console.log(count);//{a: 1, b: 1, c: 1, d: 1, e: 1}  //count of each letter


//Map
//doesnt change the original array
//returns a new array

var arr1 = [1, 2, 3, 4, 5];

var doublednum = arr1.map(double); 
const double = function(value, index, array){
    return value*2;
}

console.log(doublednum);//[2, 4, 6, 8, 10]
//Tip : Number() method is used to convert a string to a number


//Filter
//creates new array
//returns true or false
var numbers = [1,2,3,4,5,6,7,8,9,10];
const even = numbers.filter(isEven);

function isEven(value, index, array){
    return value%2 === 0;
}
console.log(even);//[2 , 4, 6, 8, 10]




