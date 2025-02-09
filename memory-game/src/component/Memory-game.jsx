import React, { useEffect, useState } from 'react'

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4)
  const [cards, setCards] = useState([])
  const [fliped, setFliped] = useState([])
  const [sloved, setSloved] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [won, setWon] = useState(false)

  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value)
    if (size >= 2 && size <= 10) {
      setGridSize(size)
    }
  }

  const initilizeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()]
      .map((n) => n + 1);

    const suffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards).map((number, index) => ({ id: index, number }))
    console.log(suffledCards)

    setCards(suffledCards)
    setFliped([]);
    setSloved([]);
    setWon(false);
  }

  useEffect(() => {
    initilizeGame()
  }, [gridSize])


  const checkMatch = (secondId) => {
    const [firstId] = fliped;
    if (cards[firstId].number === cards[secondId].number) {
      setSloved([...sloved, firstId, secondId])
      setFliped([])
      setDisabled(false);
    } else {
      setTimeout(() => {
        setFliped([])
        setDisabled(false)
      }, 1000);
    }
  }

  const handleclick = (id) => {
    if (disabled || won) return;

    if (fliped.length === 0) {
      setFliped([id])
      return;
    }
    if (fliped.length === 1) {
      setDisabled(true)
      if (id !== fliped[0]) {
        setFliped([...fliped, id]);

        //check matchlogic
        checkMatch(id)
      } else {
        setFliped([]);
        setDisabled(false);
      }
    }
  }

  const isFlipped = (id) => fliped.includes(id) || sloved.includes(id);
  const isSolved = (id) => sloved.includes(id)


  useEffect(() => {
    if (sloved.length == cards.length && cards.length > 0) {
      setWon(true)
    }
  }, [sloved, cards])


  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold mb-6'>Memory game</h1>
      {/* Input */}
      <div className='mb-4'>
        <label htmlFor="" className='mr-2'>
          Gird Size (max 10)
        </label>
        <input type="number" id="gridSize" min="2" max='10' onChange={handleGridSizeChange}
          className='border-2 border-gray-300 rounded px-2 py-1'
        />
      </div>

      {/* Game Board */}
      <div className={`grid gap-2  mb-4`}
        style={{
          gridTemplateColumns: `repeat(${gridSize},minmax(0,1fr))`,
          width: `min(100% , ${gridSize * 5.5}rem)`,
        }}
      >
        {
          cards.map((card) => {
            return <div key={card.id}
              onClick={() => handleclick(card.id)}
              className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer transition-all duration-300 bg-gray-300 text-gray-400 
                ${isFlipped(card.id)
                  ? isSolved(card.id)
                    ? "bg-green-400 text-white"
                    : "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-400"}`}
            >
              {isFlipped(card.id) ? card.number : "?"}
            </div>
          })
        }
      </div>

      {/* Result */}
      {
        won && (
          <div className='mt-4 text-4xl font-bold text-gray-600 animate-bounce'>
            You won</div>
        )
      }

      {/* Reset / Play Again BTn */}

      <button
        onClick={initilizeGame}
        className='mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-gray-600 transition-colors'
      >{won ? "Play Again" : "Reset"}</button>
    </div>
  )
}

export default MemoryGame