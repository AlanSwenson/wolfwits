"use client"

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [cards, setCards] = useState([
    { card: 1, clicked: false },
    { card: 2, clicked: false },
    { card: 3, clicked: false },
    { card: 4, clicked: false },
    { card: 5, clicked: false },
    { card: 6, clicked: false },
    { card: 7, clicked: false },
    { card: 8, clicked: false },
  ])
  
  const handleClick = (id) => {
    const newCards = cards.map((card) => {
      if (card.card === id) {
        return { ...card, clicked: !card.clicked }
      }
      return card
    })
    setCards(newCards)
  }

  return (
    <main className="min-h-screen items-center justify-around py-24 w-2/3 mx-auto">
      <div id="cards" className='grid gap-4 gap-y-12 gid-cols-2 sm:grid-cols-4 items-center'>
      {cards?.map((card) => {
        return <Image
          src={`/images/${card.card}.png`}
          width={200}
          height={200}
          alt={card.card}
          key={card.card}
          className={`transform transition duration-500 ease-in-out hover:scale-110 ${card.clicked ? "opacity-20" : ""}`}
          onClick={() => handleClick(card.card)} />
      })
      }
      </div>

      <div>
        {/* restart button */}
        <div className='flex justify-center py-12'>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCards(cards.map((card) => {
          return { ...card, clicked: false }
        }))}>
          Restart
        </button>
        </div>

    </div>
    </main>
  )
}
