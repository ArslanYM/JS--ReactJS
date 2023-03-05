// fetch('demo.json')//fetch data from demo.json
// .then(response => response.json())//return json data
// .then(data => console.log(data))//logs data to console which is an array of objects with name and age properties

// Path: demo.json 



//Example 

const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_button');
const dog_btn = document.getElementById('dog_button');


cat_btn.addEventListener('click', getCat);
dog_btn.addEventListener('click', getDog);


function getCat() {
    fetch('https://aws.random.cat/meow') //fetches data from random cat api
    .then(res => res.json()) //returns json data
    .then(data => { 
        cat_result.innerHTML = `<img src="${data.file}" alt="cat">`   //inserts image into html which has a src of the data.file property which is the url of the image
    })
}
//similar to getDog function
function getDog() {
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        dog_result.innerHTML = `<img src="${data.url}" alt="dog">`
    })
}
