import './App.css'
import Header from './components/Header'
import { languages } from './languages'
import { useState } from 'react'

function App() {
  const languageElements = languages.map(lang => {
    const styles = {
        backgroundColor: lang.backgroundColor,
        color: lang.color
    }
    return (
        <span 
            className="span-languages" 
            style={styles}
            key={lang.name}
        >
            {lang.name}
        </span>
    )
})

const [currentWord, setCurrentWord] = useState("react")
const [guestLetters, setGuestLetters] = useState([])

const lettersArray = currentWord.split('')

const lettersLang = lettersArray.map((letter, index) => {
  return (<span className="span-letters" key={index}>{letter}</span>)
})

const alphabet = "abcdefghijklmnopqrstuvwxyz"
const alphArray = alphabet.split('')
const keyboard= alphArray.map(item => {
  return (
    <button onClick={() => handleLetter(item)} key={item}>{item}</button>
  )
})

function handleLetter(letter){
  setGuestLetters(prevLetter => 
    prevLetter.includes(letter) ? 
      prevLetter : 
      [...prevLetter, letter])
}

  return (
    <main>
      <Header />
      <section className='status-game'>
          <h2>You win !</h2>
          <p>Well done</p>
      </section>
      <section className="language-chips">
      {languageElements}
      </section>
      <section className="word">
        {lettersLang}
      </section>
      <section className="keyboard">
        {keyboard}
      </section>

    </main>
  )
}

export default App
