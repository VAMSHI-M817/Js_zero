//Creating class
class Mobile {
    //constructor is like retreiving parameters
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    //getting methods
    calling() {
        console.log("Calling is activated");
    }

    playingGames() {
        console.log("Games are opening");
    }
    //setting methods
    setName(newName) {
        this.name = newName
    }

}
//Creating Objects by using objects 
let realme = new Mobile("Realme gt2", "Black")
let iphone = new Mobile("Iphone 15 pro", "Red")
console.log(realme, iphone);

//Getting && Setting Properties and actions with created object
console.log(realme.color);
console.log(iphone.color);
realme.calling()
realme.playingGames()
realme.setName("Redmi not 7 pro")
console.log(realme.name);


//OOPS Concepts
