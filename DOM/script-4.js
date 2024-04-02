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

function creatListItem(item){ //created an item in function parameter

    //Creating li text here
    const li = document.createElement('li')
    
    //Inserting the text into li using "createTextNode"
    li.appendChild(document.createTextNode(item))

    //Creating the button here
    const button = document.createElement('button')
    //Applying class to the button 
    button.className = 'remove-item btn-link text-red'

    //Creating the icon
    const icon = document.createElement('i')
    //Applying the class to it
    icon.className = 'fa-solid fa-xmark'

    //Here we are inserting icon into button
    button.appendChild(icon)

    //Here we are inserting button into li to create an item
    li.appendChild(button)

    //Here we're selecting the "ul" class and appending the li into ul
    document.querySelector('.items').appendChild(li)
}

//Passing parameter to it
creatListItem('Vamshi')
