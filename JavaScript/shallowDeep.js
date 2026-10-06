//shallow copy changing the value  in inner obj
let user = {
  name: "Sugan",
  address: { city: "Madurai" }
};

let copy = { ...user };

copy.address.city = "Chennai";

console.log(user.address.city); 

//Deep copy doesn't change the inner values 
let details ={
    company:"IBM",
    Role:{Develop:"Backend"}
};
let copies = structuredClone(details);
copies.Role.Develop="frontend"
console.log(details.Role.Develop);


//Json Stringify methods 
let user1={
    name:"Suganya",
    palce:{district:"Coimbatore"}
};
let deep=JSON.parse(JSON.stringify(user1));
deep.palce.district="Madurai"
console.log(user1.palce.district);
console.log(deep.palce.district);