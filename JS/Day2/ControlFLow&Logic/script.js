//Control Flow and Logic

//If Else Statements
const age = 25;
if (age>18) {
    console.log('You are old enough to vote!');
} else if(age===18){
    console.log('You are just old enough to vote!');
} else{
    console.log('You are not old enough to vote');
}


//Switch Statements
const day = 'monday';
switch (day) {
    case value: 'monday';
        console.log('Plan course structure');
        break;

    default: 
        console.log('Not a valid day!');
        break;
}



//Loops
//The 'while' Loop
//Lets say ur curling weights and u want to do it 10 times
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

//The "for" loop
//structure
//for([inititalization]; [condition]; [increment or decrement]]){code block}
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

//DRY
//Dont Repeat Yourself
