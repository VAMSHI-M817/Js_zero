//Mouse Events

const img = document.querySelector('img')

const onclick = () => console.log('onclick event')
const ondblclick = () => console.log('on double click')

const onSingleClick = () => {
    document.body.style.backgroundColor = 'red'
    document.body.style.color = 'white'
}
const onDoubleClick = () => {
    document.body.style.backgroundColor = 'purple'
    document.body.style.color = 'white'
}

const onRightClick = () => {
    console.log('OnRightEvent activated')
}
const mouseDown = () => {
    console.log('Mouse Down Activated')
}
const mouseUp = () => {
    console.log('Mouse Up Activated')
}
const wheel = () => {
    console.log('Mouse Wheel Activated')
}

const mouseOver = () => {
    console.log('MouseOver Activated')
}
const mouseOut = () => {
    console.log('MouseOut Activated')
}
const OnDrag = () => {
    console.log('On Drag Activated')
}

//For OnDrag "ondrag"
img.addEventListener('ondrag',OnDrag)

//For MouseOver "mouseup"
img.addEventListener('mouseover', mouseOver)

//For MouseOut "mouseout"
img.addEventListener('mouseout', mouseOut)

//For Mouse Wheel "wheel"
img.addEventListener('wheel', wheel)

//For Mouse Up "mouseup"
img.addEventListener('mouseup', mouseUp)

//For MouseDown "mousedown"
img.addEventListener('mousedown', mouseDown)

//For onRightClick "contextmenu"
img.addEventListener('contextmenu', onRightClick)

//For Single Click "click"
img.addEventListener('click', onSingleClick)

//For Double Click "dblclick"
img.addEventListener('dblclick', onDoubleClick)

