class user {
  constructor(userName) {
    this.userName = userName;
  }

  callME() {
    console.log(`the username is ${this.userName}`);
  }
}

class teacher extends user {
  constructor(userName, pass, email) {
    super(userName);
    this.pass = pass;
    this.email = email;
  }

  addCourse() {
    console.log(`this courese was added by MR. ${this.userName}`);
  }
}

const user1 = new teacher("Pritesh Dhanad");
user1.addCourse();

console.log(user1 instanceof teacher);
