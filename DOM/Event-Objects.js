const logo = document.querySelector('img')

function onObj(e) {
    // console.log(e.target)
    // console.log(e.currentTarget)

    e.target.style.backgroundColor = 'red'
}

logo.addEventListener('click', onObj)

//`target` - The element that triggered the event
//`currentTarget` - The element that the attached to event listner is attached to  
//`type` - the type of triggered the event
//`timeStamp` - Time that event triggered
//`clientX` - The x position of mouse click position to the window
document.body.addEventListener('click', function (e) {
    console.log(e.target)
    console.log(e.currentTarget)
    console.log(e.type)
    console.log(e.timeStamp)
    console.log(e.clientX)
    console.log(e.clientY)
})

//Prevent Default

const link = document.querySelector('a').addEventListener('click', function (e) {
    e.preventDefault()
    console.log('Link was clicked')
})


function drag1(e) {
    document.querySelector('h1').textContent = `X ${e.clientX}  Y ${e.clientY} `
}
logo.addEventListener('drag',drag1)


//KeyBoard Events

const ItemInput = document.getElementById('item-input')

const kp1 = (e) => console.log('keypress activated')

console.log(ItemInput)
ItemInput.addEventListener('keypress', kp1)
ItemInput.addEventListener('keyup', kp1)




