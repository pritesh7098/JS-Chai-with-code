const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
};

Object.setPrototypeOf(TeachingSupport,Teacher)


// use of proto and this 

let name = "pritesh   "

String.prototype.trueLength = function () {
    //console.log(`${this}`);
    //console.log(`the true length is ${this.trim().length}`);
}

name.trueLength()
"om".trueLength()


// call and This in JS 

function setUserName(userName) {
this.userName = userName

}

function createUsers(userName,password,email) {

    setUserName.call(this,userName)
    this.password = password
    this.email = email

}

const createUser1 = new createUsers( "pritesh",123,"prits@gmail.com")
const createUser2 = new createUsers( "hitesh",123,"hits@gmail.com")

console.log(createUser2);




