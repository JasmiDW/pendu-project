import './App.css'
import Header from './components/Header'
import { languages } from './languages'
import { useEffect, useState } from 'react'

function App() {
  
  const [currentWord, setCurrentWord] = useState('')
  useEffect(function (){
    fetch("https://random-word-api.herokuapp.com/word?lang=fr")
      .then(res => res.json())
      .then(data => {
          const wordWhitoutAccent = removeAccents(data[0]);
          setCurrentWord(wordWhitoutAccent)
      } )
      
  }, [])

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  

  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
  function handleLetter(letter){
    setGuessedLetters(prevLetter => prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter])
  }

  

  const languageElements = languages.map((lang, index )=> {
    const isLost = index < wrongGuessCount
    const styles = {
        backgroundColor: lang.backgroundColor,
        color: lang.color
    }
    return (
        <span 
            className={`span-languages ${isLost ? "lost" : ""}` }
            style={styles}
            key={lang.name}
        >
            {lang.name}
        </span>
    )
  })
  
  const lettersArray = currentWord.split('')
  const isGameLost = wrongGuessCount == languageElements.length
  const isGameWon = lettersArray.every(currentLetter => guessedLetters.includes(currentLetter))
  const isGameOver = isGameWon || isGameLost

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
          <section className={`status-game ${isGameLost ? "game-over" : ""} ${isGameWon? "game-won" : ""}`}>
            {isGameOver ? (
              isGameWon ? (
                  <>
                      <h2>Gagné !</h2>
                      <p>Bien joué! 🎉</p>
                  </>
              ) : (
                  <>
                      <h2>Game over!</h2>
                      <p>La réponse était : {currentWord} Recommence 😭</p>
                  </>
              )
            ) : (
                  null
            )}
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
        {isGameOver && <button className="new-game">New Game</button> }

      </main>
    )
}

export default App
