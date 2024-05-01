//Promises -- THE PROMISE AN OBJECT THAT EVENTUAL COMPLETION OF AN ASYNC OPERATION

const cart = ["apple", "mango", "banana"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletbalance();
    });
  });
});

//we can't pass a callback and can't belive it works so
//Promises helps to escape this

createOrder(cart)
  .then(function (orderId) {
    //FORMED PROMISE CHAINING BY USING MULTIPLES ".then"
    proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    showOrderSummary(paymentInfo);
  })
  //we can also use arrow function
  .then((paymentInfo) => updateWalletbalance(paymentInfo))
 