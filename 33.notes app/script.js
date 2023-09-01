const addBtn = document.getElementById('add') 
const notes = JSON.parse(localStorage.getItem('notes'))

if(notes){
    notes.forEach(note => addNewNote(note))
}
addBtn.addEventListener('click' , () => addNewNote())

function addNewNote(text = '' ){
const note = document.createElement('div')
note.classList.add('note')

note.innerHTML = `
         <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="nothing ${text ? "hidden" : ""}"></textarea>
`


const main = note.querySelector('.main')
const textArea = note.querySelector('textarea')

if(text){
    main.classList.add('hidden')
    if(textArea.classList.contains('hidden')){
        textArea.remove('hidden')
    }
}
else{
    main.classList.remove('hidden')
    if(!textArea.classList.contains('hidden')){
        textArea.classList.add('hidden')
    }
}



const editBtn = note.querySelector('.edit')
const deleteBtn = note.querySelector('.delete')

textArea.value = text
// main.innerHTML = marked(text)
deleteBtn.addEventListener('click' , () => {
    note.remove()
    updateLS()
})

editBtn.addEventListener('click' , () => {
    console.log('hi')
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
    console.log('hiiewl')
})

textArea.addEventListener('input' , (e) => {
const {value} =e.target
main.innerHTML = marked(value)

updateLS()
})
document.body.appendChild(note)

}

function updateLS(){
const notesText = document.querySelectorAll('textarea')

const notes = []

notesText.forEach(note =>  notes.push(note.value))


localStorage.setItem('notes' , JSON.stringify(notes))

}