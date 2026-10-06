let checktheeven =new Promise((resolve,reject)=>{
let num =13;
if(num%2==0){
    resolve("the Number is even");

}
else{
    reject("the number is not even")
}

})
/*checktheeven
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error);
})
    */


let fruits =new Promise((resolve,reject)=>{
    let fruiteName ="apple";
    if(fruiteName.includes("app")){
        resolve("It's have the letters")
    }
    else{
        reject("it's doesn't have it")
    }
    
})
fruits
/*.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.error(error);
})
    */
Promise.all([checktheeven,fruits])
.then(result=>console.log(result))
.catch(error=>console.log(error))


Promise.allSettled([checktheeven,fruits])
.then(result=>console.log(result))
.catch(error=>console.log(error))

//promise race 
 let p1 =new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("success")
    },2000);
 })
 let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       reject("rejected")
    },3000)
 });
 Promise.race([p1,p2])
 .then((message)=>{
    console.log(message)
 })
 .catch((error)=>{
    console.log(error);
 })


 //promise.any =>its returns only the resolved state 

 let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("failed");
    },500);
 })

 let p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("failed");
    },1000);
 })
let p5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Passes");
    },1000);
 })
 Promise.any([p3,p4,p5])
 .then((message)=>{
    console.log(message)
 })
 .catch((error)=>{
    console.error(error);
 })