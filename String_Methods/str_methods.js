const user = "vamshi is good boy";

//toLowerCase
console.log(user.toLowerCase());
//toUpperCase
console.log(user.toUpperCase());
//length
console.log(user.length);
console.log(user.length - 1);
//charAt
console.log(user.charAt(29));
//startsWith
console.log(user.toLowerCase().startsWith("v"));
//trim
console.log(user.trim().toLowerCase().startsWith("vamshi"));
//indexOf()
console.log(user.indexOf("v"));
//split
console.log(0 === "0");
console.log("0" == 0);

let arr = [
  {
    uname: "vamshi",
    email: "vamsi@gmail.com",
  },
  {
    uname: "ramu",
    email: "ramu@gmail.com",
  },
  {
    uname: "shiva",
    email: "shiva@gmail.com",
  },
  {
    uname: "raju",
    email: "raju@gmail.com",
  },
];
for (i = 0; i <= arr.length - 1; i++) {
  const element = arr[i];
  console.log(element.email);
}

arr.forEach((element) => {
  return console.log(element.uname);
});

arr.map((element) => {
  return console.log(element.email);
});
// const newarr = ["vamsi", "vamsi", "vamsi", "vamsi"];
// const newarr2 = ["shiva", "shiva", "shiva", "shiva"];

// console.log(newarr);
// console.log(...newarr2);

let fruits = ["mango", "apple"];
let users = ["vamshi", "shiva"];

let concat = fruits.concat(users);
console.log(concat.reverse());

