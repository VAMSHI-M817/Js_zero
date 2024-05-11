//Polymorphism :- 

//1.CREATING PARENT CLASS
class Person {
    constructor(name, designation) {
        this.name = name
        this.designation = designation
    }

    learn() {
        console.log("Learning...");
    }
    eat() {
        console.log("Eating...");
    }
    sleep() {
        console.log("Sleeping");
    }
}
//2.EXTENDING PARENT CLASS TO CHILD CLASS BY USING "extends" keyword
class Coder extends Person {
    constructor(name, designation, companyname) {
        super(name, designation)
        this.companyname = companyname
    }

    coding() {
        console.log("Dancing...");
    }

}
//3.EXTENDING PARENT CLASS TO ONE MORE
class Dancer extends Person {
    constructor(name, designation, schoolname) {
        //BY USING SUPER() METHOD GETTING PROPERTIES FROM PARENT CLASS
        super(name, designation)
        this.schoolname = schoolname;
    }
    dancing() {
        console.log("Dancing...");
    }

}
//4.CREATING OBJECT BY USING CLASS
let vamshi = new Coder("Vamshi", "Developer", "Deloitte")
console.log(vamshi);
//Getting methods form parent class
vamshi.eat()
vamshi.learn()
vamshi.sleep()
//Getting methods from child class
vamshi.coding()

let priya = new Dancer("Priya", "Dancer", "Kalakhand")
console.log(priya);
priya.learn()
priya.eat()
priya.sleep()
priya.dancing()