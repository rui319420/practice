import { ModifiedPathsSnapshot } from 'mongoose';
import './App.css';
import { useState } from 'react';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "img/jsP.png"},
  {"src": "img/React.svg"},
  {"src": "img/TMJT.png"},
  {"src": "img/TSS.svg"},
  {"src": "img/nodejs.png"},
  {"src": "img/nextjs.jpg"},
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setCards(shuffleCards);
    setTurns(0);
  }

console.log(cards, turns)


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard key={card.id}/>
        ))}
      </div>
    </div>
  );
}

export default App;
