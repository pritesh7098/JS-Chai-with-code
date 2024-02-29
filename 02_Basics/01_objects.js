
const mySym =Symbol("me")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

/*  console.log(JsUser.email)
 console.log(JsUser["email"])
 console.log(JsUser["full name"]) 
 console.log(JsUser[mySym]); */


 JsUser.email = "hitesh@chatgpt.com"
 Object.freeze(JsUser)
 JsUser.email = "priteshd@gmail.com"

 //console.log(JsUser.email);



  JsUser.greeting = function(){
    console.log("Hello JS user");
} 
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}

//console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());