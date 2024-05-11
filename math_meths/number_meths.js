const x = 123;
//converting a number using toString() method
x.toString();
console.log(x, typeof x.toString());
console.log((12).toString(2));

//toExponential() method - returns a string,-
//with a number rounded and written using -
//exponential notation

//uses of print only the customized count of decimal
//output - 9.65e+0
const y = 9.6542;
console.log(y.toExponential(2));
console.log(y.toExponential(4)); //output - 9.6542e+0

//toFixed() method - returns a string ,with specified no of decimals
console.log(y.toFixed(0)); //prints round figure of number if decimal more than 9.5
console.log(y.toFixed(2)); //op- 9.65
console.log(y.toFixed(4)); //op- 9.6542
console.log(y.toFixed(6)); //op- 9.654200

//toPrecisoin() method - returns a string , with specified length
console.log(y.toPrecision(2));
console.log(y.toPrecision(3));
console.log(y.toPrecision(4));
console.log(y.toPrecision(5));
console.log(y.toPrecision(6));

//Number
//Prints boolean nums as numbers
console.log(Number(true)); //op - 1
console.log(Number(false)); //op - 0
console.log(Number("this is string")); //op - NaN
console.log(Number("10"));

//parseInt - parses a number and returns a whole number
console.log(parseInt(101.1212)); //op- 101

//parseFloat() - returns float values and int values
let a = 1;
let b = 1.5;
console.log(parseFloat(a));
console.log(parseFloat(b));

//toLocaleString() 
let num = 7643232.43
console.log(num.toLocaleString());
console.log(num.toLocaleString(("ja-JP-u-ca-japanese")));

