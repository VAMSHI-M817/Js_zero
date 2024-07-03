const user = "vamshi is good boy";

//toLowerCase
console.log(user.toLowerCase());
//toUpperCase
console.log(user.toUpperCase());
//length
console.log(user.length);
console.log(user.length - 1);
//charAt
console.log(user.charAt(29));
//startsWith
console.log(user.toLowerCase().startsWith("v"));
//trim
console.log(user.trim().toLowerCase().startsWith("vamshi"));
//indexOf()
console.log(user.indexOf("v"));
//split
console.log(0 === "0");
console.log("0" == 0);

let arr = [
    user1 = {
        uname: "vamshi",
        email: "vamsi@gmail.com"
    },
    user2 = {
        uname: "ramu",
        email: "ramu@gmail.com"
    },
    user3 = {
        uname: "shiva",
        email: "shiva@gmail.com"
    },
    user4 = {
        uname: "raju",
        email: "raju@gmail.com"
    },
];
for (i = 0; i <= arr.length - 1; i++) {
    const element = arr[i]
    console.log(element)
}

let nums = [5, 6, 3, 6, 7, 8, 23]
console.log(nums.sort((a, b) => {
    return a - b
}))

const newarr = ["vamsi", "vamsi", "vamsi", "vamsi",]
const newarr2 = ["shiva", "shiva", "shiva", "shiva",]

console.log(newarr)
console.log(...newarr2)
