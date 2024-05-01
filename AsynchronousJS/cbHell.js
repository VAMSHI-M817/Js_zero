//Callback hell

const cart = ["shoes", "rice", "laptop"];

//Creating the callback hell using api callbacks

//createOrder callback hell
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   });
// });

function step1(param1, callback) {
  console.log("This is step 1");
  callback();
  console.log("This is step 3");
}

function step2() {
  setTimeout(() => {
    console.log("This is step 1");
    setTimeout(() => {
      console.log("This is step 2");
      setTimeout(() => {
        console.log("This is step 3");
        setTimeout(() => {
          console.log("This is step 4");
          setTimeout(() => {
            console.log("This is step 5");
            setTimeout(() => {
              console.log("This is step 6");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 2000);
    }, 2000);
  }, 2000);
}
step2();
