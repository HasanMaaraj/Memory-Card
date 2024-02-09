import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [guesses, setGuesses] = useState([]);

  const reset = currentScore => {
    setGuesses([]);
    if (currentScore > highScore) setHighScore(currentScore);
    setScore(0);
  }

  
  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }
  
  const [cards, setCards] = useState(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));



  return (
    <>
      
    </>
  )
}

export default App
