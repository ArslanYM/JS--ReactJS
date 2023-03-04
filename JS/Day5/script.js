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
//var numbers = [1,2,3,4,5,6,7,8,9,10];
const even = numbers.filter(isEven);

function isEven(value, index, array){
    return value%2 === 0;
}
console.log(even);//[2 , 4, 6, 8, 10]


//reduce
//returns a single value

var numbers = [1,2,3,4,5,6,7,8,9,10];
//if we want to add all the numbers in the array
//reduce() method takes 2 arguments
//1. callback function
//2. initial value
var sum = numbers.reduce(add, 0);//returns 55

//Tip: You want to compress the array into a single value , then use reduce


//slice
//returns a new array
//doesnt change the original array
var arr = [1,2,3,4,5,6,7,8,9,10];
var sliced = arr.slice(2, 5);//returns [3,4,5]  


//if you want to return the last 3 elements of the array
var sliced = arr.slice(-3);//returns [8,9,10]
console.log(sliced);/./[8,9,10]


//splice
//changes the original array
//returns the removed elements
var arr = [1,2,3,4,5,6,7,8,9,10];
var removed = arr.splice(2, 5);//returns [3,4,5,6,7]
console.log(arr);//[1,2,8,9,10]



//sort
//changes the original array
//returns the sorted array
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
names.sort();//returns ['chun-li', 'luigi', 'mario', 'shaun', 'yoshi']

//Tip: sort() method sorts the values as strings by default

//if you want to sort the numbers
var numbers = [10, 50, 40, 30, 20, 100];
numbers.sort((a, b)=>{
    //if a-b is positive, a will be sorted before b
    //if a-b is negative, b will be sorted before a
    //if a-b is 0, a and b will be sorted as they are
    return a-b});//returns [10, 20, 30, 40, 50, 100]

 
//cocat
