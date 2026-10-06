let candidate  ={
    name :"suganya",
    role :"Software Engineer"
}
console.log(candidate);

let animal={
    eats:true

}
let dog =Object.create(animal);
dog={
    barks:true
}
animal.walks = true;
console.log(dog.barks);
console.log(animal.eats);
console.log(dog.walks);

//object prototype 
//creating a plain object its should {} can't true on outside showing undefined
let doggy ={};
console.log(doggy);
 
//create object using name  we can pass the objects 
let animals ={eats:true}
let dpg =Object.create(animals); // its should return null because it was in the {}
 animals.happy=true
 console.log(dpg.happy);

 //creating a prototype using new constructor keyword
 function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function() {
  return "I'm " + this.name;
};

let dog1 = new Dog("Shiro");

console.log(dog1.__proto__ === Dog.prototype);

function fruits(places){
    this.places=places
}
fruits.prototype.colours = function(){
    return "fruits are in "+this.places;
}
let orange =new fruits("Jammu");
console.log(orange.__proto__ ==fruits.prototype);

//object entries 
let employee ={
    EmployId:11,
    EmployName :"Suganya",
    IntroData :function(){
        console.log(this.EmployId);
    }
}
employee.IntroData();
//convert object literal to array literal
let name =Object.entries(employee);
console.log(name);
//convert array literal to object literal
let arr =Object.fromEntries(name);
console.log(arr);
//keys used for returning the keys in the objects 
console.log(Object.keys(employee));
//values used for returning the values in the objects 
console.log(Object.values(employee));
//freeze methods used for freeze the object we can't able to add or delete anything in the new object
Object.freeze(employee);
console.log(Object.isFrozen(employee))
