//Callback function in javascript
//The function we'll send a function as an argument and calls inside the function
//Simple code of callback
function main(callback1, callback2) {
  console.log("This is main function");
  callback1();
  callback2();
}
main(callback1, callback2);

function callback1() {
  setTimeout(() => {
    console.log("hi vamshi");
  }, 3000);
}
function callback2() {
  console.log("hi jhon");
}
function callback2() {
  console.log("Callback Two function");
}
function callback2() {
  console.log("Callback Two function");
}

// let count = 0;
// document.getElementById("clickhere").addEventListener("click", function x() {
//   console.log("Button Clicked", count++);
// });

function createEventhandler() {
  const button = document.querySelectorAll("button");

  button.forEach((button, index) => {
    function handleClick() {
      console.log("Button" + (index + 1) + "clicked");
    }
    button.addEventListener("click", handleClick);
  });
}
createEventhandler();

//Callback Hell
