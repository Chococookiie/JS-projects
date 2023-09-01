const ratings = document.querySelectorAll('.rating')
const ratingscontainer = document.querySelector('.ratings-container')

const sendBtn = document.querySelector('#send')
const panel  = document.querySelector('#panel')
let selectedRating= 'Satisfied'

ratingscontainer.addEventListener('click' , (e) => {
if(e.target.parentNode.classList.contains('rating')){
    removeActive()
    e.target.parentNode.classList.add('active')
selectedRating = e.target.nextElementSibling.innerHTML
 }
})

sendBtn.addEventListener('click' , (e) => {
    panel.innerHTML =  `
    <i class="fas fa-heart"></i>
    <strong>ThankYOU! </strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p> we will try to improve</p>
    `
})
function removeActive(){
    for(let i= 0 ; i < ratings.length;i++){
        ratings[i].classList.remove('active')
    }
}