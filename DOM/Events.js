//Events 
const clearbtn = document.querySelector('#clear')

//Method - 1
function onClear() {
    const items = document.querySelector('ul')
    const item = document.querySelectorAll('li')

    //Method - 1 to remove elements
    // items.innerHTML = items.remove()

    //Method - 2 to remove elements
    // item.forEach((item) => {
    //     item.remove()
    // })

    //Method - 3 to remove elements
    while (item.firstChild) {
        items.removeChild(items.firstChild)
    }
}

//Method - 2
// clear.onclick = function(){
//     alert("Method - 2")
// }

//Method - 3
//addEventListner
//Preference - 1
// clear.addEventListener('click', function () {
//     alert('Alert using function')
// })

// //Preference - 2
// clearbtn.addEventListener('click', () => { 
//     console.log('Alert using arrow function')
// })

clearbtn.addEventListener('onclick', onClear())

// setTimeout(()=>{
//     clearbtn.removeEventListener('click',onClear)
//     console.log('work')
// },5000)




