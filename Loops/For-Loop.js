// //ex-3
//         //nested for loop


//         for (i = 0; i <= 4; i++) {
//             for(j=0;j<=5;j++){
//                 document.write('*')
//             }
//             document.write("*"+"<br>")
//         }



let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
    // inner loop runs for n
    for (let num = 1; num <= n; num++) {
        pattern = pattern + num;
    }
    // Add a new line character after contents of each line
    pattern = pattern + "\n";
                
}
console.log(pattern)




