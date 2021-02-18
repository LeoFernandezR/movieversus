import React from 'react'

export default function Achievement({ achievementData, winner = false }) {
  const winnerStyle = winner ? 'is-primary' : 'is-link'
  return (
    <article className={`notification ${winnerStyle}`}>
      <p className='title'>{achievementData.content}</p>
      <p className='subtitle'>{achievementData.title}</p>
    </article>
  )
}
