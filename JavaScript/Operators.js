//spread Operator 
//It's called as a clone Operator 
let user =[{Name :"suganya" },{Degree :"B.E CSE"}];
let UpdateUser =[...user,{College:"SNS College Of Technology"}]
console.log(UpdateUser);
//We can do the shallow copy (not reference copy)
let arr=[10,20,30,40]
console.log(...arr);

//Reference Copy 
//primitive values copied by values
//object copied  by reference  

//Primitive data type 
let num1 =2;
let num2 =num1;
num2=11;
console.log(num2); //Numbers only copied by values only 

//object Reference 
let obj1 ={name :"suganya"};
let obj2 = obj1 ;
//in this obj2 is taking the memory space of obj1 its not creating the new memory space 
let obj3 ={...obj1,degree:"b.e"};
console.log(obj3);//shallow copy its creating a new memory space itself 
 
//Destructring 
//Extracting the arrays or objects into variables 
 let abc =[10,11,12,13];
 let [a,b,c,d]= abc;
 console.log(a);

 