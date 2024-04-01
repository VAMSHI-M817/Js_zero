//Get the child elements

let output;

const parent = document.querySelector('.parent')

output = parent.children[1].innerText
output = parent.children[1].className
output = parent.children[1].nodeName


parent.children[0].innerText = 'Vamshi'
parent.children[0].style.color = 'red'
parent.children[1].style.color - 'blue'



console.log(output)