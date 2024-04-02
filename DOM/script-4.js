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


  //Here we are inserting icon into button
  button.appendChild(icon)

//Here we are inserting button into li to create an item
li.appendChild(button)


  //Here we're selecting the "ul" class and appending the li into ul
  document.querySelector('.items').appendChild(li)
}

//Passing parameter to it
creatListItem('Vamshi')

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




createListItem('Mango')
