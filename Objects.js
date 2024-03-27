let user = {
    Name: "Vamshi",
    Role: "Junior Web dev ",
    Mobile: "8179540483",
    State: "Telangana",
    Adress: function () {
        return "I live in" + this.State
    }
}

console.log(user.Name)
//calling function using object key
let a = user.Adress();
console.log(a)


//New method to create an object
const user1 = new Object()

user1.Name = "Kumar"
user1.Role = "Frontend Developer"
console.log(user1)
