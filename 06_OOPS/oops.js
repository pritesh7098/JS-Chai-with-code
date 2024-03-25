const user = {
  name: "pritesh",
  roll_no: 13,
  Address: "Kopargaon",
};

//console.log(user);

// use of this and new

const myFun = function (name, pass, age) {
  this.name = name;
  this.pass = pass;
  this.age = age;
};

const userone = new myFun("pritesh", 123, 22);
const usertwo = new myFun("hitesh", 123, 28);

console.log(userone);
console.log(usertwo);
