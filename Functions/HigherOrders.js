//HigherOrder Functions

//Radius of Circle
const radius = [3, 1, 2, 4];

//Area of the circle
const calculateArea = function (radius) {
  let output = [];
  for (i = 0; i <= radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log(calculateArea(radius));

//Circumference of the circle
const calculateCircumference = function () {
  let output = [];
  for (i = 0; i <= radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
console.log(calculateCircumference(radius));

//Diameter of the circle
const calculateDiameter = function (radius) {
  let output = [];
  for (i = 0; i <= radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};
console.log(calculateDiameter(radius));

//According to the DRY principle known as Don't Repeat Yourself in companies
//we can't write reapeated code
//The OPTIMIZED Functional Programming code is here

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (arr, logic) {
  let output = [];
  for (i = 0; i <= arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};
//This is the general method
console.log(calculate(radius, area));
//Using map method
console.log(radius.map(area));

console.log(b);

let a = 20;

var b = 20;
const c = 20;
