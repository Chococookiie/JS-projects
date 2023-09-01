const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesCliked = 0

loveMe.addEventListener('click' , (e) => {
if(clickTime ===0){
clickTime = new Date().getTime()   
console.log('hi')
}
else{
    if((new Date().getTime() - clickTime) < 8000){
        createHeart(e)
        clickTime = 0
        console.log('hi2')

    }
    else{
        clickTime = new Date().getTime()
        console.log('hi3')

    }
}
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    console.log('hi4')

    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOfSet = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOfSet
    heart.style.top = `${yInside}px`
    heart.style.left =`${xInside}px`

    loveMe.appendChild(heart)
    times.innerHTML = ++timesCliked
    console.log('hi5')
    setTimeout(() => {
        heart.remove()
    }, 5000);
}