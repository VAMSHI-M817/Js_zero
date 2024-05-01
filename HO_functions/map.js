//Map is a Higher order function
//It applies function to each element in the array and forms a new array
const arr = [5, 1, 3, 2, 6];

//Double the values using map
function double(x) {
  return x * 2;
}

//Triple the values using map
function triple(x) {
  return x * 3;
}

//Converting to binary values using map
function binary(x) {
  return x.toString(2);
}

//This is the method
const mapping = arr.map(binary);
console.log(mapping);

//USING ARRAY OF OBJECTS accessing elements
const users = [
  { firstName: "vamshi", lastName: "M", age: 2 },
  { firstName: "akshay", lastName: "M", age: 22 },
  { firstName: "tajmul", lastName: "M", age: 23 },
  { firstName: "sohail", lastName: "M", age: 24 },
];

const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);
