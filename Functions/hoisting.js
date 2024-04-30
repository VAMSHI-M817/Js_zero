//HOISTING OF VARIABLE AND FUNCTION

//Javascript is a synchronized single threaded programming language
//The hoisting of js represents the how the data stored and working
//The js mainly runs by storing the data temporarily in the browser
//that is known as CALLSTACK
//The Value storing contains the two blocks while js is executing they are
//MEMORY && CODE
//Where "Memory" is to store the synchronized code globally and CODE is
//will be the execution part of browser
//The common errors of hoisting are UNDEFINED && NOT DEFINED
//UNDEFINED is cause while the variable or fun is not hoisted correctly
//NOT DEFINED will cause while the variable or fun is'nt defined

getData();
console.log(x);

var x = 5;
function getData() {
  console.log("Name is vamshi");
}

const getName = () => {
  console.log("Callback Vamshi");
};
getName();

function cbt() {
  setTimeout(function () {
    console.log("This is a set callback");
  }, 2000);
}
cbt();

function cbk() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then(console.log(json()));
}
cbk();
