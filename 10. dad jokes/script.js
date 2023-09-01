const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click' , generateJoke)
generateJoke()

async function generateJoke() {
        const config = {
            headers: {
                'Accept' : 'application/json'
            }
        }
    
      const res = await fetch('https://icanhazdadjoke.com/<joke_id>.png' , config)    
     const data =await res.json() //as promise is returned we have to use await 
     jokeEl.innerHTML = data.joke
    }

// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept' : 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com' , config).then(res => res.json()).then((data)=> {
//       jokeEl.innerHTML = data.joke  
   
//     })

// }
