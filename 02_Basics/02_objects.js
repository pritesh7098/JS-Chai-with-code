
/* const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)




const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj5 = {...obj1,...obj2,...obj4}

console.log(obj5);



 */


// object destructuring 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


const  { price : p } = course
console.log(p);

