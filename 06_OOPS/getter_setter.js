/* class user { 

constructor(userName,password) {

this.userName = userName
this.password = password

}

sayname() {

   // console.log(`my name is ${this.userName}`);

}
saypw() {

    //console.log(`my pw is ${this.password}`);
    }
}




//const userone = new user( "pritesh","prits@gmail.com")
userone.sayname()
userone.saypw()
 */



// getter and setter 

class user { 

    constructor(userName,password) {
    
    this.userName = userName
    this.password = password
    
    }

get password() {

    return this._password.toUpperCase()
}

set password(value) {

    return this._password = value
}
}

let userone = new user( "pritesh","prits@gmail.com")
console.log(userone.password);
