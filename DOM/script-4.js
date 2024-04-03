//innerHtml && CreateElement        
//There is some methods Quick & Dirty 
function createListItem(item) {
  const li = document.createElement('li')
  li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`

  document.querySelector('.items').appendChild(li)
}


//Clean & Performant

function creatListItem(item) { //created an item in function parameter

  //Creating li text here
  const li = document.createElement('li')

  //Inserting the text into li using "createTextNode"
  li.appendChild(document.createTextNode(item))


  const button = createButton('remove-item btn-link text-red')

  //Here we are inserting button into li to create an item
  li.appendChild(button)


  //Here we're selecting the "ul" class and appending the li into ul
  document.querySelector('.items').appendChild(li)
}

//Passing parameter to it
creatListItem('Vamshi')
creatListItem('Normal Juices  ')

//Refactor to Multiple Functions

function createButton(classes) {
  //Creating the button here
  const button = document.createElement('button')
  //Applying class to the button 
  button.className = classes

  const icon = createIcon('fa-solid fa-xmark')
  button.appendChild(icon)

  return button
}

function createIcon(classes) {

  //Creating the icon
  const icon = document.createElement('i')
  //Applying the class to it
  icon.className = classes

  return icon
}

//The multiple methods for inserting elements into dom are

//insertAdjacentElement Example

function insertElement(element) {

  //get element
  const filter = document.querySelector('.filter')

  //create text
  const h1 = document.createElement('h1')
  h1.textContent = element

  //inserting element
  filter.insertAdjacentElement("beforebegin", h1)

}
insertElement('Items Not Available')
//function calling



//insertAdjacentText Example

function insertText() {
  const item = document.querySelector('li:first-child')

  item.insertAdjacentText('afterend', 'This Item is so tasty')

}
insertText();

//insertAdjacentHtml Example

function insertHtml() {
  const clearBtn = document.querySelector('#clear')

  clearBtn.insertAdjacentHTML('afterend', '<button id="clear" class="btn-clear">Clear afterend  </button>')
}
insertHtml()

//insertBefore Example

function insertBeforeItem() {
  const ul = document.querySelector('ul')

  const li = document.createElement('li')
  li.textContent = 'insertBeore'

  const thirdItem = document.querySelector('li:nth-child(3)')

  ul.insertBefore(li, thirdItem)

}




// // beforebegin
//   <p>
// // afterbegin
//   the...
// // beforeend
//   <p/>
// // afterend  



