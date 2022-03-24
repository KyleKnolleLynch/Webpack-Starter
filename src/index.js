import generateJoke from './generateJoke'
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughingSvg = document.getElementById('laughing_svg')
laughingSvg.src = laughing


document.getElementById('jokeBtn').addEventListener('click', generateJoke) 



