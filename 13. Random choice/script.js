const tagsEl= document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    console.log('hi')

    if(e.key === 'Enter'){
        setTimeout( ()=> {
            e.target.value= ''
        } , 10  )
        randomSelect()
    }
})

function createTags(input){
   const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
//    console.log(tags)
   tagsEl.innerHTML = ''

   tags.forEach( tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
   })
}

function randomSelect(){
    const times = 30
   // highlight unhighlight tags
    const interval = setInterval( () => {
        const randomtag = pickRandomTag()
        highlightTag(randomtag)

        setTimeout( () => {
            unhighlightTag(randomtag)
        },100)
    } , 100)

    //stops and picks random tag to highlight
    setTimeout( () => {
            clearInterval(interval)
            setTimeout( () => {
                const randomTag = pickRandomTag()

                highlightTag(randomTag)
            },100)
    }, times *100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}
function unhighlightTag(tag){
    tag.classList.remove('highlight')
}