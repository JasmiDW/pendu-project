import './App.css'
import Header from './components/Header'
import { languages } from './languages'
import { useState } from 'react'

function App() {
  
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  console.log(wrongGuessCount)

  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
  function handleLetter(letter){
    setGuessedLetters(prevLetter => prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter])
  }

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

  const lettersArray = currentWord.split('')
  const lettersLang = lettersArray.map((letter, index) => {
    return (<span  className="span-letters" key={index}>{guessedLetters.includes(letter) ? letter : ""}</span>)
  })

  const alphArray = alphabet.split('')
  const keyboard= alphArray.map(item => {

    const isGuessed = guessedLetters.includes(item)
    const isCorrect = isGuessed && currentWord.includes(item)
    const isWrong = isGuessed && !currentWord.includes(item)

    return (
      <button className={`
        ${isCorrect ? "bg-green" : ""}
        ${isWrong ? "bg-red" : ""}
        ${!isGuessed ? "" : ""}`} onClick={() => handleLetter(item)} key={item}>{item}</button>
    )
  })

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
