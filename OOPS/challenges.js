//Finding largest number using ifelse
const findNum = (a, b, c) => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};
console.log("Largest Num:", findNum(1415, 1415, 566));

//Finding largest number using Math method
const findNum2 = (a, b, c) => {
  return Math.max(a, b, c);
};
console.log("Largest Num:", findNum2(14243, 1424, 1234));

//Finding largest number in array
let arr = [12, 3434, 34, 1234, 1223535, 1234234234];
const findNum3 = (data) => {
  return Math.max(...data);
};
console.log("Largest Num", findNum3(arr));

//finding largest number using ternary operator
const findNum4 = (a, b, c) => {
  return a <= b && a <= c ? a : b <= a && b <= c ? b : c;
};
console.log("Largest Num:", findNum4(20, 21, 22));




