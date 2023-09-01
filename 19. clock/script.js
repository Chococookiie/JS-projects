const toggle = document.querySelector('.toggle')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]

const months = ["Jan" ,"Feb" , "Mar" , "Apr" , "May" , "June" , "July" ,"Aug" , "Sept" , "Oct" , "Nov" , "Dec" ]

toggle.addEventListener('click' , (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    
    }
    else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    
    }
})

function settime() {
    const time = new Date() ;
    const month = time.getMonth()
    const day = time.getDay()
    const hours =time.getHours()
    const hoursofClock = hours%12 

    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
const ampm = hours >=12 ? 'PM' : 'AM'

const date = time.getDate()
    hourEl.style.transform = `translate(-50% , -100%) rotate(${scale(hoursofClock , 0 , 11,0,360)}deg)`
    minuteEl.style.transform = `translate(-50% , -100%) rotate(${scale(minutes , 0 , 59,0,360)}deg)`
    secondEl.style.transform = `translate(-50% , -100%) rotate(${scale(seconds , 0 , 59,0,360)}deg)`
   timeEl.innerHTML = `${hoursofClock} :${minutes <10 ? `0${minutes}` : minutes} ${ampm}`

   dateEl.innerHTML = `${days[day]}, ${months[month]} <span class = "circle">${date}</span>`
console.log(months[month])
}


const scale = (num , in_min , in_max , out_min , out_max) => {
    return (num-in_min) * (out_max - out_min) / (in_max - in_min) + out_min ;
 }
 settime()
 setInterval(settime , 1000)