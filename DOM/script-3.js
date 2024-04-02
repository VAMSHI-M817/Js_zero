//Create and Append Elements

//we can create an element using createElement() using a div 
const div1 = document.createElement('div')//we created a div now

//applying a class name to the div
div1.className = 'my-element'

//aplying an id to the div
div1.id = 'my-element'

//Using set attribute we're applying title to the div
div1.setAttribute('title','hello')

//If we want to add an innerText to the div,
// then we use the method createNode()
const text = document.createTextNode('Hello Vamshi')

//Applying the text to the div using appendChild property
div1.appendChild(text)


//Applying some text in the browser using appendChild()
document.body.appendChild(text)

//Applying the text in ul using append child
document.querySelector('ul').appendChild(text)

console.log(div1)