
//Difference Between Function Statement & Expression is HOISTING
//The function statement can run before initialization but Expression not do that
// a()
// b()

//Function statements & Declaration
function a() {
    console.log("vamshi is function statement")
}
// a()


//Function Expression
var b = function () {
    console.log("Vamhshi this is function expression")
}

//Anonymous Function
//It is used as a value in a named functions
// function(){ 

// }


//Named Function Expression

//Difference between Parameters & Arguments
function ParamsandArags(boy, girl) {   //here we pass parameters
    console.log(boy, girl)
}
ParamsandArags("vamshi", "priya") //Here pass an arguments

//First Class Functions - Ability to be used like values
//Also Called as First Class Citizens
//we can send a function as an argument

function boy(hardwork) {
    console.log(hardwork)
    //we can return a function from a function
    return function inner1(){
        console.log("This is a returned fun")
    }
}
let x = boy()
x()
boy(goal)

function goal() {
    var goal = 'coderss'
}
