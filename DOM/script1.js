//Getting child elements
let output;

//using querySelector
const parent = document.querySelector('.parent')

//["children" is property to get the elements of each in parent element]
output = parent.children[0].innerText
output = parent.children[1].style.color = 'red'
output = parent.children[2].innerText


parent.children[0].style.color = 'blue'
parent.children[1].style.color = 'green'
parent.children[2].style.color = 'red'

//firstElementChild - is property
parent.firstElementChild.innerText = 'Child One'

//lastElementChild - is property
parent.lastElementChild.innerText = 'Child Three'

//Get parent elements from a child
const child = document.querySelector('.child')
child.parentElement.style.border = '1px solid black'
child.parentElement.style.padding = '10px'

//Get Siblings using child
const secondItem = document.querySelector('.child:nth-child(2)')

output = secondItem.innerText = 'Child Two'
output = secondItem.nextElementSibling.innerText = 'Child Three'
output = secondItem.previousElementSibling.innerText = 'Child One'

//Previous Child
secondItem.previousElementSibling

//Middle child
secondItem.style.border = '1px solid red'
secondItem.style.padding = '10px'

//Last Child
secondItem.nextElementSibling.style.border = '1px solid black'
secondItem.nextElementSibling.style.padding = '10px'




console.log(output)




