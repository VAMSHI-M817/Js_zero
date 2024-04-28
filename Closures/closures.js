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
function outest(b) {
  const x = 1000
  function outer() {
    let y = 100
    function inner() {

      console.log(xl, y, b)
    }
    inner()
    return inner;
  }

  outer()
}
outest("vamshi")