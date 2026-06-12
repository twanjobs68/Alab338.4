function logExecution(aFunction) {

    return function (){
        console.log("Calling function");
        
        aFunction();

    };
}

function helloMe() {
    console.log("Hello World!");
}

let newAFunction = logExecution(helloMe);

newAFunction();