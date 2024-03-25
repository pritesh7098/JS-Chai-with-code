
//Basics 

function add(num) {
return num+2;
}
console.log(add(6));
console.log(add.prototype);


// operations with prototypes and new keyd 

function myUser(itemName,price)
{

this.itemName = itemName,
this.price = price;

}

myUser.prototype.printMe= function(){
    console.log(`the price is ${this.price}`);
}

//console.log(myUser);

// const myuser1 = new myUser("tea",50)
const myuser2 = new myUser("cofee",500) 

myuser2.printMe()



