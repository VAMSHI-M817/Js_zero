//Returns rounded value
//Math.round()
num = Math.round(5.4);
console.log(num);
num1 = Math.round(5.6);
console.log(num);

//Math.ceil() - returns round figure if sigle decimal contains to a int
num = Math.ceil(5.1);
console.log(num);
num = Math.ceil(5.6);
console.log(num);

//Math.floor()

//Math.sign()
//returns -1 if any -ve values spotted
console.log(Math.sign(-4));
//returns 1 if ant +ve values spotted
console.log(Math.sign(4));
//returns 0 if null values spotted
console.log(Math.sign(null));

//Math.pow -- used to count the powers like square & cubes
console.log(Math.pow(2, 2)); //2 square - 4
console.log(Math.pow(5, 3)); // 5 cube - 125

//Math.sqrt
// gives square root
console.log(Math.sqrt(64)); //op - 8
console.log(Math.sqrt(1024)); // op -32

//Math.min && Math.max - used to find the lowest and highest number of list of arguments
const list = Math.min(-1, 1, 2, 3, 12, 1, 21, 1, 23, 42);
console.log(list);

//max
const list1 = Math.max(1, 2, 3, 12, 1, 21, 1, 23, 42);
console.log(list1);

//Math.random
console.log(Math.round(Math.random()*100000));
