//Destructuring  => Extract values from arrays and objects then assign them to variables in a convenient way

//[]=> to perform array destructuring
//Ex-1 =>SWAP ELEMENTS IN AN ARRAY
const colors = ["Green", "blue", "red", "Pink", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

//Ex-2 =>ASSIGN ARRAY ELEMENTS TO VARIABLES
[firstcolor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstcolor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//{}=> to perform object destructring
//Ex - 1 =>EXTRACTING VALUES FROM OBJECTS
const user1 = {
  firstName: "Vamshi",
  salary: 100000,
  role: "Frontend Developer",
};
const user2 = {
  firstName: "Tajmul",
  salary: 300000,
  role: "Backend Developer",
};
const { firstName, salary, role, job = "unemployed" } = user1;
console.log(firstName);
console.log(salary);
console.log(role);
console.log(job);

//DESTRUCTURE IN FUNCTION PARAMETERS
function des({ firstName, salary, role, job = "unemployed" }) {
  console.log(`This is my ${firstName}`);
  console.log(`This is my salary ${salary}`);
  console.log(`This is my role ${role}`);
  console.log(`This is my job ${job}`);
}
des(colors);
function des1() {
  console.log(`This is my ${firstName}`);
  console.log(`This is my salary ${salary}`);
  console.log(`This is my role ${role}`);
  console.log(`This is my job ${job}`);
}
des1(colors);
