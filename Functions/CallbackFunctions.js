

function user(name, callback) {
    console.log("hi" + ' ' + name)
    callback();

}

function callme() {
    console.log("Hi Im a call back function")
}
function callme2() {
    console.log("Hi Im a call back function 2")
}
user("Vamshi", callme);