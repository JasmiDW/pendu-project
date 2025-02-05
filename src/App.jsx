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
const lettersArray = currentWord.split('')

const lettersLang = lettersArray.map((letter, index) => {
  return (<span className="span-letters" key={index}>{letter}</span>)
})


  return (
    <main>
      <Header />
      <section className='status-game'>
        <div>
          <h2>You win !</h2>
          <p>Well done</p>
        </div>
      </section>
      <section className="language-chips">
      {languageElements}
      </section>
      <section className="word">
        {lettersLang}
      </section>
        

    </main>
  )
}

export default App
