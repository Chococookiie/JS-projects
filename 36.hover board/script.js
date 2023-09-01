const container =document.getElementById('container')
const colors =['#3494e4'  ,'#2c3e50'  ,'#7bdaf3'  ,'#3498db' , 'red' , 'yellow' , 'green' , 'blueviole' , 'choclate' , 'coral' ,'crimson' , 'cornsilk', 'darkgreen' , 'darkorange' , 'gold' ,'hotpink']

const SQUARES = 500

for( let i=0; i< SQUARES ;i++){
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)

    square.addEventListener('mouseover' , () => setcolor(square))
    square.addEventListener('mouseout' , () => removecolor(square))

}

function setcolor(element){
const color  = getRandomColor()
element.style.background = color
element.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`
// console.log(color)
}

function removecolor(element){
element.style.background = '#1d1d1d'
element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}