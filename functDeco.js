//Task 1

// function logExecution(aFunction) {

//     return function (){
//         console.log(`Calling function, ${aFunction.name}`);
        
//         aFunction();

//     };
// }

// function helloMe() {
//     console.log("Hello World!");
// }

// let newAFunction = logExecution(helloMe);

// newAFunction();

// // call the original function fn and capture return value

// let oFunction = newAFunction();

// //print message after calling fn
// console.log(oFunction);


// function logExecution(fn) {

//    //This is the inner function -closure 
//     return function () {

//         console.log("Calling the function " + fn.name);

//         let outResult = fn();

//         console.log("Function " + fn.name + " return " + outResult);

//         return outResult;
//     };
// }

// function nextHello() {
//     return "Hello!";
// }

// let loggedNextHello = logExecution(nextHello);

// loggedNextHello();

// function add(a,b){
//     return a+b;
// }

// let addNum = add(10,1);
// console.log(addNum);

// function logExecution(fn) {
//     return function (...args) {
//         console.log("Calling the function " + fn.name);

//         let outResult = fn(...args);

//         console.log("Function " + fn.name + " return " + outResult);

//         return outResult;
//     };
// }

// function addNum(a, b) {
//     return a + b;
// }

// function multNum(c,d){
//     return c * d;
// }

//Creat decorated version
// const wrappedAdd = logExecution(addNum);
// const wrappedMult = logExecution(multNum);

// //call function
// //let theResult = wrappedAdd(9,10);
// wrappedAdd(9,10);
// wrappedMult(7,4);
//console.log(`The result of calling the decorated function is ${theResult}.`);
//console.log(`Calling multNum function results in ${multResult}.`)

//Task 2 Generators and Iterators

function* evenNumbers(){

    let myNum = 0;

    while(true) {
        yield myNum;
        myNum += 2;
    }
}

//Iterator
const evenIter = evenNumbers();

//log first 5 even numbers

console.log(evenIter.next().value);
console.log(evenIter.next().value);
console.log(evenIter.next().value);
console.log(evenIter.next().value);
console.log(evenIter.next().value);
