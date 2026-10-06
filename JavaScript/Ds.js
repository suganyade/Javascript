//Arrays 
let userprofile=["Suganya","B.E CSE","SNS College of Technology"];
console.log(userprofile);
//shorthand dynamic property also called as dynamic property
//[key] is a computed (dynamic) property
let key = "name";
let obj = {
  [key]: "Suganya"
};

console.log(obj.name); // Suganya

let sub1 = "subjects";

let sub = {
  [sub1]: ["Tamil", "English"]
};

console.log(sub.subjects);

//why index is 0  formula  = baseAddress +(index*Size);
//Baseadress always start with 1004 [10,11,12,13];
// 1004+(0*4)=1004 its mention the 0th index 


//push -->add at end  
let arr3 =[10,20,30];
arr3.push(40);
console.log(arr3);
//pop -->remove at end 
arr3.pop();
console.log(arr3);
//shift -->remove at begining 
 arr3.shift();
 console.log(arr3);
 //unshift --> add at beginning 
 arr3.unshift(11);
 console.log(arr3);
 