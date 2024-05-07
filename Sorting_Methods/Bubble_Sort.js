

function bubbleSort(array) {
    const n = array.length

    for (let i = 0; i < n; i++) {
        // console.log(arr[i])
        for (let j = 0; j < n; j++) {
            console.log(arr[j]);
            if (arr[j] > arr[j + 1]) {
                //swap
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

}

const arr = [5, 4, 3, 2, 1]
console.log("Unsorted", arr)
bubbleSort(arr)
//Array sorted
//2 Contributing update
console.log("Sorted", arr)


let array = [1, 2, 3, 4, 5]

for (let i = 0; i < array.length; i++) {
    // const element = array[i];
    // console.log(element);
    for (let j = 0; j < array.length; j++) {
        const element2 = array[j];
        // console.log(array[j]);
        for (let k = 0; k < array.length; k++) {
            const element3 = array[k];
            console.log(array[k]);
        }
    }
}
