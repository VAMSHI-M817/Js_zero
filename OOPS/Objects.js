//THESE ARE THE TYPES OF CREATING THE OBJECTS

//1.OBJECT LITERALS
let user = { name: "vamshi", role: "dev" };
console.log(user);
console.log(typeof user);

//2.OBJECT.CREATE({})
let mobile = Object.create({});
mobile.name = "Realme gt2";
console.log(mobile);

//Functions are objects in Js
//creating objects using functions
function Mobile() {
    return "This is mobile";
}
//Creating mobile object
let mobile1 = new Mobile();
mobile1.name = "realme"
mobile1["username"] = "vamshi"
console.log(mobile1);

//Creating Objects Using Classes
class User {

}
let user1 = new User()
user1.Username = 'Vamshi'
user1.username = "suma"
console.log(user1);

