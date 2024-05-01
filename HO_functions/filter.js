//Filter is used to filter the array according to our requirement
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//Filtering the odd numbers
function isOdd(x) {
  return x % 2;
}

//Filtering the even numbers
function isEven(x) {
  return x % 2 === 0;
}

//Printing the >4 values
//we can pass the function in the map directly
const filter = arr.filter(function (x) {
  return x > 4;
});

//we can use the arrow functions instead of traditional functions
const filter2 = arr.filter((x) => {
  return x > 5;
});

//Using arrow fun without return value
const filter3 = arr.filter((x) => x > 6);

// const filter1 = arr.filter(_four);
console.log(filter);
console.log(filter2);
console.log(filter3);

//Filtering the users by age

const users = [
  { firstName: "vamshi", lastName: "M", age: 41 },
  { firstName: "akshay", lastName: "M", age: 22 },
  { firstName: "tajmul", lastName: "M", age: 23 },
  { firstName: "sohail", lastName: "M", age: 20 },
];

const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output);
