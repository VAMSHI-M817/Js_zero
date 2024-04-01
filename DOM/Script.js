// //document.getElementById()
// // let output;

// // console.log(document.getElementById('app-title'))
// // console.log(document.getElementById('app-title').id)
// // console.log(document.getElementById('app-title').className)
// console.log(document.getElementById('app-title').getAttribute('id'))

// //Set attributes

// document.getElementById('app-title').title = 'Shopping List'
// document.getElementById('app-title').setAttribute('class', 'title')

// const title = document.getElementById('app-title')

// console.log(title)

// // Get/ changing the content
// title.textContent = 'Vamshi Shopping Mall'
// title.innerText = 'Hello World'
// title.innerHTML = '<strong>Shopping Mall </strong>'

// //Changing styles
// title.style.color = 'white'
// title.style.backgroundColor = 'black'
// title.style.padding = '10px'
// title.style.borderRadius = '10px'

// //doucment.querySelector()

// //selector by tag
// console.log(document.querySelector('h1'))

// //selector by id
// console.log(document.querySelector('#app-title'))

// //selector by class
// console.log(document.querySelector('.container'))

// //selector by input
// console.log(document.querySelector('input[type = text]'))

// //selector by psuedo classes
// console.log(document.querySelector('li:nth-child(1)'))
// const SelectItem2 = document.querySelector('li:nth-child(1)')
// SelectItem2.style.color = 'green'


//Use these methods on other elements
//using querySelector we can use single elements
// const list = document.querySelector('ul')
// const firstItem = list.querySelector('li')
// firstItem.style.color = 'red'
// console.log(list)
// console.log('--------------------------------------------')


// //querySelectorAll
// //we can't access the node list directly we can use forEach method
// const listItems = document.querySelectorAll('.item')
// console.log(listItems[1].innerText)

// listItems.forEach((item, index) => {
//     item.style.color = 'red'

//     if (index === 1) {
//         item.style.color = 'black'
//     }

//     if (index === 0) {
//         item.innerHTML = ` Strawberry Juice
//         <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`
//     }
// })

// //getElementsByClassName()
// const listItems2 = document.getElementsByClassName('item')
// // console.log(listItems2[2].innerText)
// //This method is type of restricted we will get elements by class name

// const listItemsArray = Array.from(listItems2)

// listItemsArray.forEach((items, index) => {
//     console.log(items.innerText)
// })
// console.log('------')

    // //getElementsByTagName
    // const listItems3 = document.getElementsByTagName('li')
    // // console.log(listItems3)

    // const listItems3Array = Array.from(listItems3)
    // console.log(listItems3Array)

    // listItems3Array.forEach((item ,index) => {
    //     item.style.color = 'blue'

    //     if(index === 0){
    //         item.style.color = 'yellow'
    //     }
    // })

//Traversing the DOM elements 













