const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Successfully Resolved");
    },10000)
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Resolved in 5s");
    },5000)
})

async function name() {
        console.log("p1 is running");
    const p11 =await p1;
     console.log(p11);
   console.log("p2 is running");
    const p12 =await p2;
     console.log(p12);

}
name();