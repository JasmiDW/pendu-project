import './App.css'
import Header from './components/Header'
import { languages } from './languages'

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
      
    </main>
  )
}

export default App
