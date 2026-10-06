//this keyword 
//In normal function this keyword mention the current object its a local varaible 
let employee ={
    empId:1,
    empName:"sugan",
    empDept:"Electrical",
    empdetail:function(){
    console.log(this.empDept+" "+this.empName);
    }
}
employee.empdetail();

//in arrow function "this " keyword act as a global varaible  we can't get the data from this place 
 let StudentCollege ="Tom";
let Student ={
    StudentName :"Tom",
    StudentCollege:"SNS",
    StudentDetail:()=>{
        console.log(this.StudentCollege);
    }
}
Student.StudentDetail();

//Call method 
let batch ={
    cse :170,
    ece:180,
    NonCircuit:function(name1,name2){
        console.log(this.cse+name1+" "+name2);
    }
}
batch.NonCircuit.call(batch,"agri","cse");

//Apply Method 
let fruits={
    Apple:12,
    banana:10,
    vegetables:function(veg1,veg2){
console.log(veg1+veg2)
    }}
fruits.vegetables.apply(fruits,[12,13])

//Bind Method - it's not excutes immediately 
function names(){
    console.log(this.name);
}
let user1= {name:"jerry"}
let user2={name:"tom"}
let bound =names.bind(user1);



//call Method  
//The call() method can be used to call a function with a specific this.
//The call() method lets an object use a method belonging to another object.const hi=()=>{
let batches ={
studentsName:190,
branches:function(name11,name2){
    console.log(this.studentsName,
+name11 +" "+name2);
} 
}
batches.branches.call(batches,
"suganya","sandy")
let fruity = {
    Apple: 10,
    Orange: 11
};

let veggie = {
    Carrot: 11,
    tomato: 12
};

let totalCost = {
    fruitVeg: function (f1, f2) {
        console.log(this.Apple + this.Carrot);
        console.log(f1 + this.Apple);
        console.log(f2 + this.Carrot);
    }
};

// Combine both objects
let combined = {
    Apple: fruity.Apple,
    Carrot: veggie.Carrot
};

totalCost.fruitVeg.call(combined, "Apple Rate is ", "Carrot count is ");


//Apply method in js 
 totalCost.fruitVeg.apply(combined, ["Apple Rate is ", "Carrot count is "])