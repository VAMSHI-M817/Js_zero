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




//types of returning functions

function x() {
  var a = 100;
  function y() {
    console.log(a);
  }
  a = 200;
  return y;

  return function e() {
    console.log(a);
  };
}
var z = x();
var ze = x();
console.log(ze());


debugger
function A() {
  const a = 10;
  function B() {
    b = 20;
    function C() {
      console.log(a, b);
    }
    C();
  }
  B();
}
A();
