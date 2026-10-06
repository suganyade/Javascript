//function 
//1.named Function -->Easy to reuse
function greet(){
    return "hello";
}
console.log(greet());
//2.Anonymous function  --> used as a call back or variable & can't able to call directly 
var name =function(){
    return "calling the anonymous function";
}
console.log(name());
//3.Function Expression--> it be a anonymous or named function anything but we can need to call the variables
function add(a,b){
    return a+b
}console.log(add(2,3));
//4.Arrow function --> => used 
const mul =n=>n*n;
console.log(mul(5));

const happy = ()=>{
    console.log("joy");
}

//5.IIFE -Immedidately Invoked  function without calling it will run 
(function (){
    console.log ("Without calling immediately invoked function is running")
})()

//6.Generator Function 
 function*generatingFunction(){
    console.log("step1");
    yield;
    console.log("step 2");
    yield;
     console.log("step 3");
 }
 const process = generatingFunction();
 console.log(process.next());
 console.log(process.next());
 console.log(process.next());

 