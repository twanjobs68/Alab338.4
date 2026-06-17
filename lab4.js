//Task 1

function logExecution(aFunction) {

    return function (){
        console.log(`Calling function, ${aFunction.name}`);
        
        aFunction();

    };
}

function helloMe() {
    console.log("Hello World!");
}

let newAFunction = logExecution(helloMe);

newAFunction();

// call the original function fn and capture return value

let oFunction = newAFunction();

//print message after calling fn
console.log(oFunction);


function logExecution(fn) {

   //This is the inner function -closure 
    return function () {

        console.log("Calling the function " + fn.name);

        let outResult = fn();

        console.log("Function " + fn.name + " return " + outResult);

        return outResult;
    };
}

function nextHello() {
    return "Hello!";
}

let loggedNextHello = logExecution(nextHello);

loggedNextHello();

function add(a,b){
    return a+b;
}

let addNum = add(10,1);
console.log(addNum);

function logExecution(fn) {
    return function (...args) {
        console.log("Calling the function " + fn.name);

        let outResult = fn(...args);

        console.log("Function " + fn.name + " return " + outResult);

        return outResult;
    };
}

function addNum(a, b) {
    return a + b;
}

function multNum(c,d){
    return c * d;
}

// Create decorated version
const wrappedAdd = logExecution(addNum);
const wrappedMult = logExecution(multNum);

//call function
let theResult = wrappedAdd(9,10);
wrappedAdd(9,10);
wrappedMult(7,4);
console.log(`The result of calling the decorated function is ${theResult}.`);
console.log(`Calling multNum function results in ${multResult}.`)

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

//create generator function that logs ID numbers 4 times
function* idGenerator() {
    let myId = 1;

    while (true) {
        yield myId;
        myId++;
    }
}
const idIter = idGenerator();

console.log(idIter.next().value);
console.log(idIter.next().value);
console.log(idIter.next().value);
console.log(idIter.next().value);

//Task 3 Asynchronous Programming(Callbacks, Promises, Async/Await)
/*Write a function fetchData() that returns a new Promise. Inside the promise executor, 
use setTimeout to simulate a delay (e.g., 1 second). After the timeout, resolve the 
promise with some data, for example an object or simple value like "Hello World" or 
{ success: true }. (In a real scenario this could be data fetched from a server, but 
 here we will just simulate.)*/

function fetchData() {

    return new Promise(function(resolve, reject) {
        setTimeout(function () {

            resolve("Hello World!");
        }, 1000);
    });
}

fetchData().then(function (resultOut) {
    console.log("Promise resolved by output:" +resultOut + ".");
})
.catch(function (error) {
    console.log("Promise rejected with the following: + error");
});
 //Testing the use of async.wait to log results and logging something before and after calling get data
 console.log(" Getting data....");
async function getData() {
    try {
        let resultOut = await fetchData();
        console.log("Got data...");
        console.log("Promise resolved displaying data: " + resultOut + ".");
    }catch (error) {
        console.log("The error displayed is:" + error);
    }
}

getData();
