function sayHi(){
    console.log("Hi");
}
function greet(name,callBack){
console.log("Happy Morning"+name);
callBack();
}

greet("Ajay",sayHi);
//sayhi function is passed as a callback function ,it will run after the greet function 

//CallBacks of Asynchronus function 
console.log("Start");
setTimeout(()=>{
    console.log("Running after 3s")
},3000)
console.log("end")

//callback Functions handling operations 
function calc(a,b,c,callBack){
return callBack(a,b,c)
}
function add(a,b,c){
    return a+b+c
}
console.log(calc(11,11,11,add))

//callbackhell 
 function step1(callBack){
    setTimeout(()=>{
    console.log("step1 completed")
    callBack();
    }
,1000);

 }
 function step2(callBack){
    setTimeout(()=>{
console.log("step2completed")
    callBack();
    },1000)
 }
  function step3(callBack){
    setTimeout(()=>{
console.log("step3completed")
    callBack();
    },1000)
}
step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("All callbacks copleted")
        })
    })
})