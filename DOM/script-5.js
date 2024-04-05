// //Replacing Elements    
// function replaceElement() {
//     const firstItem = document.querySelector('li:first-child')

//     const li = document.createElement('li')
//     li.textContent = 'Replaced Element'

//     firstItem.replaceWith(li)
// }
// replaceElement()

// //Second Method for replacing the elements
// function replaceElement2() {
//     const secondItem = document.querySelector('li:nth-child(2)')

//     secondItem.outerHTML = '<li>Replaced Item - 2</li>'

// }
// replaceElement2()

//Third Method for replacing the elements
function replaceAllItems() {
    const list = document.querySelectorAll('li')
    //Method - 1 
    // list.forEach((item, index) => {
    //     item.outerHTML = '<li>Replaced All</li>'

    //     if(index == 2){
    //         item.innerHTML = '<li>ajsdf</li>'
    //     }
    //    console.log(item,index)
    // });

    //Method -2
    list.forEach(
        (item, index) => (item.outerHTML = index === 1 ? '<li>second item</li>' : '<li>item</li>'))

}
replaceAllItems()


//Third method for replacing elements

function replaceElement3() {
    const header = document.querySelector('header')
    const h1 = document.querySelector('header h1')

    const h2 = document.createElement('h2')
    h2.innerText = 'replace 3'

    header.replaceChild(h2, h1)
}
replaceElement3()


//Remove Elements

//Removing single Element
function removeItem() {
    //Removing the clear all button
    const clearbtn = document.querySelector('#clear')
    clearbtn.remove()
}
removeItem()

//removing child element
function removeChild() {
    const ul = document.querySelector('ul')

    const li = document.querySelector('li:nth-child(2)')

    //RemoveChild is a method
    ul.removeChild(li)
}
// removeChild()

//Removing element method-2
function removeChild2(itemRemove) {
    const ul = document.querySelector('ul')
    const li = document.querySelector(`li:nth-child(${itemRemove})`)

    ul.removeChild(li)
}
// removeChild2(2)


