"use strict";
//adding Last name

let firstName = ["Vamshi", "Ramu", "Shiva", "Raju"];
let lastName = "Zenoids";

// for (let i = 0; i < firstName.length; i++) {
//   const Fname = firstName[i];
//   let newArray = [];
//   newArray.push(`${Fname} ${lastName}`);
//   console.log(newArray);
// }

//calculate total
let gas = [300, 400, 800, 500];
let food = [3000, 4000, 8000, 5000];

const Total = (data) => {
  let TA = 0;
  for (let i = 0; i < data.length; i++) {
    TA += data[i];
    if (TA > 3000) {
      console.log("You're spending too much");
    } else {
      console.log("You're good in savings");
    }
  }
  return TA;
};

// const Tgas = Total(gas);
// const Tfood = Total(food);
// console.log({
//   TotalGasCost: Tgas,
//   TotalFoodCost: Tfood,
// });

const users = [
  {
    id: 1,
    name: "vamshi",
    email: "vamshi@gmail",
  },
  {
    id: 2,
    name: "vamshi",
    email: "vamshi@gmail",
  },
  {
    id: 3,
    name: "vamshi",
    email: "vamshi@gmail",
  },
];
const findUsers = users.find((eachUser) => {
  return eachUser.id === 1;
});
console.log(findUsers);

let user = ["vamshimarepu","adfjdfasf","shiva"];
const slicing = user.splice(0,2);
console.log(slicing);
