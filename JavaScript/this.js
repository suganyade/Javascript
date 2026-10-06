//global context
console.log(this);
//in browser its representing a window 
//in nodejs its pointing the {}its a global obj

//function call 
function greet(){
    console.log(this)
}
greet();

//method call 

let happy ={dept :"backend",
    person:function(){
        console.log(this.dept)
    }
  
}
happy.person();

//constructor method 
function dog(name){
    this.name=name;
}
let dog1= new  dog("shiro");
console.log(dog1.name)

//Arrowing Function 
let ai ={replace:"testing",
    greet:()=>
           console.log(this.replace)
    
};
ai.greet();

let subjects ={replacing:"ai replace almost all things",
    has:()=>
        console.log("yeah!!".concat(this.replacing))
};
subjects.has();