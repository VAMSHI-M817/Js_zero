//created a promise
const prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise is resolved 1");
  }, 20000);
});
const prom2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise is resolved 2");
  }, 40000);
});
//Using async and await method to get output
//The async function will return a promise automatically
const handlePromise = async function () {
  console.log("This is before");
  const data = await prom1;
  console.log(data);
  console.log("This is after ");

  const data2 = await prom2;
  console.log(data2);
  console.log("This is after data2");
};
handlePromise();

// //using the general promise method to get output

// handlePromise().then(function (data) {
//   console.log(data);
// });

//async function using api

const API_URL = fetch("https://jsonplaceholder.typicode.com/users/1");

async function getData() {
  //Handling errors with try_catch is modern method
  try {
    const Data = await API_URL;
    const Response = await Data.json();
    console.log(Response);
  } catch (err) {
    console.log("Something went wrong while fetching!!");
  }
}
//we can also use catch method to handle error old method
getData().catch((err) => console.log("Something went wrong while fetching!!"));

const num = (a, b) => {
  return a * b;
};
console.log(num(3, 3));

const naam = (name) => {
  return console.log("My name is" + " " + name);
};
naam("vamshi");



const FAKE_API = 'https://jsonplaceholder.typicode.com/users/5'

async function gettingData() {
  try {
    const fetchedData = await fetch(FAKE_API)
    const response = await fetchedData.json()
    console.log(response)
  } catch (error) {
    console.log("Error while fetching the data")
  }
}
gettingData()