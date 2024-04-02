let output;

//getting childNodes from parent
const parent = document.querySelector('.parent')

output = parent.childNodes
output = parent.childNodes[5].style.color = 'red'
output = parent.childNodes[7].style.color = 'green'
output = parent.lastChild.innerText = 'vamshi'


//Get parentNodes from childNodes
const child = document.querySelector('.child')

//We can use parentNode
child.parentNode.style.border = '1px solid black'
child.parentNode.style.padding = '10px'
child.parentNode.style.backgroundColor = '#ccc'

//we can use parentElement 
child.parentElement.style.border = 'black'


//Siblings
const secondItem = document.querySelector('child:nth-child(2)')

output = secondItem.nextSibling


console.log(output)
