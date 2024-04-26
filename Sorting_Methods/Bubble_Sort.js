
// function bubbleSort(array) {
//     const n = array.length

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 //swap
//                 const temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
// }

// const arr = [5, 4, 3, 2, 1, -2, -4, -7, -1]
// console.log("Unsorted", arr)
// bubbleSort(arr)
// //array sorted
// console.log(arr) 

// const arr = [5, 4, 3, 2, 1]
// const len = arr.length

// for (let i = 0; i < len; i++) {
//     // console.log(i,arr[i])
//     for (let j = 0; j < len - i - 1; j++) {
//         console.log(arr[j])
//     }
// }


// function bubbleSort(arr) {
//     let n = arr.length;  // n is the total number of elements in the array
//     let swapped;         // This flag will help us see if swaps were made during a pass

//     // Outer loop goes from the first element to the second last element
//     for (let i = 0; i < n - 1; i++) {
//         swapped = false; // Reset swapped to false on each new pass

//         // Inner loop for each pass over the array that isn't already sorted
//         for (let j = 0; j < n - i - 1; j++) {
//             // Compare the current element with the next one
//             if (arr[j] > arr[j + 1]) {
//                 // Swap elements if they are in the wrong order
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 swapped = true; // Set swapped to true because a swap occurred
//             }
//         }

//         // If no elements were swapped, then the list is already sorted
//         // and there's no need to continue checking in the outer loop
//         if (!swapped) {
//             break;
//         }
//     }
//     return arr; // Return the sorted array
// }


