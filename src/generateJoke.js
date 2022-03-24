import axios from 'axios'

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const joke = document.getElementById('joke')
  const fragment = document.createDocumentFragment()
  const p = document.createElement('p')

  joke.innerHTML = null

  axios.get('https://icanhazdadjoke.com', config).then(res => {
    p.textContent = res.data.joke
  })
  fragment.append(p)
  joke.append(fragment)
}

export default generateJoke
