//Reduce Method
//Finding the sum of the array

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function findSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));

let arr1 = [1, 2, 3];
for (i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

//Getting the count of particular age
const users = [
  { firstName: "vamshi", lastName: "M", age: 2 },
  { firstName: "akshay", lastName: "M", age: 22 },
  { firstName: "tajmul", lastName: "M", age: 23 },
  { firstName: "sohail", lastName: "M", age: 24 },
];
