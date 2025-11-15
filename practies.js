import{adddd} from "./math.js"
//var
var x=10;
const y=20;

//arror functions
const add = (a, b) => a + b;
console.log(add (10, 4));

//Template Literals
const name = "World";
console.log(`Hello, ${name}!`); 


//Destructuring
const point = {z: 30, t: 20, r:20};
const {z,t,r} = point;
console.log(z+t);
console.log(t);


//Default
function greet(message="welcome", name = "World"){
    console.log(`${message}, ${name}!`);
    }
    greet(); 
    greet("Hello", "Alice");

//spread
const arr1 = [1, 2, 3];
function sum1(q,w,e){
    const x=q+w+e;
    return x;
}
console.log(sum1(...arr1));


// REST

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num,0);
}

console.log(sum(1, 2, 3, 4, 5, 6,7,8));


console.log(adddd(10,15));

const myPromise = new Promise((resolve, reject) => {
    let success = false;  // Change to false to test rejection

    setTimeout(() => {
        if (success) {
            resolve(" Promise resolved!");
        } else {
            reject(" Promise rejected!");
        }
    }, 0);
});

// Using the Promise
myPromise
    .then(result => console.log(result))  // Runs when resolved
    .catch(error => console.error(error)) // Runs when rejected
    .finally(() => console.log(" Promise completed"));

    
    

