//Callback hell

const cart = ["shoes", "rice", "laptop"];

//Creating the callback hell using api callbacks

//createOrder callback hell
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});
