//DataTypes in JavaScript 
//primitive and non primitive 
//javascript is a dynamic typed language so no need to define the data types 
let number =10
let string ="abcd"
let boolean=true
let nontannumber ;
 //Non primitive data type
let objects ={name :'suganya',
    role :'software Engineer'
};
console.log(objects);
let array =[11,32,34,67];
function fibo(n) {
if(n<=1){
    return n;
}

   return fibo(n-1)+fibo(n-2);

}
console.log(fibo(5));
let a =70;
let b=90;
//relational operators
console.log(a>b,"a is greater than b");
console.log(a<b,"a is less than b");
console.log(a==b);//equal
console.log(a!=b);//not equal
console.log(a===b);//same value with same type--Strict equal
//Arithmetic Operators 
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**b);//exponent
//increment decrement
console.log(++a + ++b); //preincrement
console.log(--a - --b);//pre decrement 
console.log(a++ +  b++)//post increment
console.log(a-- + b--); //post decrement

//Literals 
let work ="software Engineer"
console.log(`Ben is a ${work}`);
//type conversion =change the data type to another data type 
//implicit datatype ==> automatically change the datatype
//explicit datatype ==> have somemethods
//implicit datatype 
let num = 1+"2";
console.log(num);
//explicit datatype 
let num1 = "11px";
console.log(parseInt(num1));
//conditional statements 
//if 
let n1=11;
if(n1==11){
    console.log("n1 is equal to 11");
}
//if else 
let n2= 29;
if(n2%2==0
){
    console.log("Even number");
}
else{
    console.log("Odd Number");
}

//if else-if
 let age =18;
 if(age>18){
    console.log("Not eligiblt for vote")
 }
 else if(age == 18){
console.log("need to complete 18")
 }
 else{
    console.log("eligible to vote");
 }

 //teranary 
 let nationality ="Indian";
 nationality=="Indian"? console.log("he is indian "):console.log("Not indian");
 //Switch case 
 let grade ="A";
 switch (grade){
    case "A":
        console.log("Good Grade");
        break;
    case "B":
        console.log("average");
        break;
    default:
    console.log("Poor");
 }
 //while loop
 let arr=[11,23,45,67];
 let i=0;
 while(i<arr.length){
    console.log(arr[i]);
    i++;
 }
//do while 
let j =99;
do{
console.log("j is greater than 100")
}while(j>100);

