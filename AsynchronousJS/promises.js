//Promises -- THE PROMISE AN OBJECT THAT EVENTUAL COMPLETION OF AN ASYNC OPERATION

const promise = new Promise((res, rej) => {
  res({ user: "vamshi" });
});

promise
  .then((data) => {
    return fetch("https://jsonplaceholder.typicode.com/users/1");
  })
  .then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.log(err);
  });

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Got data from server yayyyy!!");
  }, 2000);
});

promise1
  .then((data) => {
    return data;
  })
  .then((users) => {
    console.log(users);
  });

setTimeout(() => {
  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((data) => {
      return data.json();
    })
    .then((jsonData) => {
      console.log(jsonData);
    })
    .catch((err) => {
      console.log("Ohh no something went wrong!!!");
    })
    .finally(() => {
      console.log("Everything is done");
    });
}, 1000);

async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/3"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getUsers();

// const cart = ["apple", "mango", "banana"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWalletbalance();
//     });
//   });
// });

// function createOrder() {}

// //we can't pass a callback and can't belive it works so
// //Promises helps to escape this

// createOrder(cart)
//   .then(function (orderId) {
//     //FORMED PROMISE CHAINING BY USING MULTIPLES ".then"
//     proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     showOrderSummary(paymentInfo);
//   })
//   //we can also use arrow function
//   .then((paymentInfo) => updateWalletbalance(paymentInfo));
