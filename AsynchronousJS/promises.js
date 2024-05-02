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

//Creating a Promise 
const cart = ["shoes", "pant", "watch"]


function validateCart() {
  return true
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment was successful")
  })
}
function showOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    resolve("This is your orderSummary")
  })
}


function createOrder(cart) {
  const prom = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error('Cart validation was failed')
      reject(err)
    }
    //Logic for createOrder
    const orderId = '12345'
    if (orderId) {
      setTimeout(() => {
        resolve(orderId)
      }, 3000);
    }
  })
  return prom
}
const promise2 = createOrder(cart)

promise2.then(function (orderId) {
  console.log(orderId)
  return orderId
}).then(function (orderId) {
  return proceedToPayment(orderId)
}).then(function (paymentInfo) {
  console.log(paymentInfo)
})
  .catch(function (err) {
    console.log(err.message)
  })

