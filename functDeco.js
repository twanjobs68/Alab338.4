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

function add(a,b){
    return a+b;
}

let addNum = add(10,1);
console.log(addNum);