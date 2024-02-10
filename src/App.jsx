import { useState, useEffect } from 'react'
import './App.css'
import images from './images.jsx'
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [guesses, setGuesses] = useState([]);

  const reset = () => {
    setScore(0);
    setGuesses([]);
  }

  
  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }

  const [cards, setCards] = useState(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
  const Card = props => {
    return (<div className='card' onClick={() => {
      setGuesses([...guesses, props.n])
      setCards(cards => shuffle([...cards]))
      }}>
        <img src={images[props.n-1]}/>
      </div>)
  }

  useEffect(() => {
    setScore(() => guesses.length)
    if (guesses.length != new Set(guesses).size) {
      reset()
      alert('You Lost!')
    } else if (guesses.length == cards.length) {
      reset()
      alert('You Won!')
      
    }
  }, [guesses])
  


  useEffect(()=> {
    if (score > highScore) setHighScore(() => score);
  }, [score])


  const Board = () => {
    let BoardHTML =( 
    <div className='board'>
      {cards.map(card => {
        return <Card n={card} key={card}/>
      })}
    </div>)
    

    return BoardHTML;
  }

  return (
    <>
      <header>
        <h1>Memory Card</h1>
      </header>

      <main>
        <div className='scores'>
          <div>Score: {score}</div>
          <div>High Score: {highScore}</div>
        </div>
        <Board />
      </main>

      <footer>
        <div>
        Stickers from: <a href='https://www.flaticon.com/stickers-pack/animals-139'>FLATICON</a>
        </div>
        <a href='https://github.com/HasanMaaraj'>
        <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' id='github-img'/>
        </a>
          
      </footer>
    </>
  )
}

export default App
