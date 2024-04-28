//CLOSURES is a bundled lexical functions

//Uses of Closure
//Module Design Pattern
//Currying
//Functions like once
//Memoize
//Maintaining state in async world
//setTimeouts
//Iterators
//and many more




// //types of returning functions

// function x() {
//   var a = 100;
//   function y() {
//     console.log(a);
//   }
//   a = 200;
//   return y;

//   return function e() {
//     console.log(a);
//   };
// }
// var z = x();
// // console.log(z());


// function A() {
//   const a = 10;
//   function B() {
//     const b = 20;
//     function C() {
//       console.log(a, b);
//     }
//     C();
//   }
//   B();
// }
// A();


// //Using LET 
// //This function shows the behaviour of js while printing the numbers
// function outer1() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, i * 1000)
//   }
//   console.log("Namaste Javascript")
// }
// outer1()


// //Using VAR
// function set() {
//   //Iterating the function using "var" here
//   for (var i = 0; i <= 5; i++) {
//     //Need to create another function passing the i as a parameter to this function
//     //Use of this is it will create the new copy of function while it was iterating
//     function get(x) {
//       setTimeout(function () {
//         console.log(x)

//         //here Im setting time for every number
//       }, x * 1000);
//     }
//     get(i)
//   }
//   console.log("Namaste Javascript")
// }
// set()

const xl = 109
function outest(a) {
  const x = 1000
  function outer(b) {
    let y = 100
    function inner(c) {
      var z = 10
      console.log(a, b, c, xl, x, y, z)
    }

    inner("shreya")
  }
  outer("Priya")
}
const z = 888
outest("vamshi")



//Advantages of Closures is Data Hiding && Encapsulation
function counter() {

  //Declaring the counter
  var count = 0
  //Hiding the Increament of count 
  function increamentCounter() {
    count++;
    console.log(count)
  }
  return increamentCounter
}
var Count = counter()
Count()
Count()
Count()


//Function Constructor in javascript
function Counter() {
  var count = 0
  this.increamentCounter = function () {
    count++
    console.log(count)
  }
  this.decreamentCounter = function () {
    count--
    console.log(count)
  }
}
var counter1 = new Counter()
counter1.increamentCounter()
counter1.increamentCounter()
counter1.increamentCounter()
counter1.decreamentCounter()

function gar() {
  let marks1 = 10, marks2 = 100
  return function bage() {
    console.log(marks1)
  }
  
}
var y = gar();
y();