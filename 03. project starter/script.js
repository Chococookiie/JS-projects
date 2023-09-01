const open = document.getElementById('open')
const container = document.querySelector('.container')
const close = document.getElementById('close')

open.addEventListener('click' , ()=>{
    // console.log('hi')
    container.classList.add('show-nav')
})

close.addEventListener('click' , ()=>{
    container.classList.remove('show-nav')
   
})

