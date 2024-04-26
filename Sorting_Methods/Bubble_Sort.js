


function bubbleSort(array) {
    const n = array.length

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

const arr = [5, 4, 3, 2, 1, -2, -4, -7, -1]
console.log("Unsorted", arr)
bubbleSort(arr)
//array sorted
//2 Contributing update
console.log(arr) 