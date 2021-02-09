import React from 'react'

export default function Achievement({ achievementData }) {
  return (
    <article className='notification is-primary'>
      <p className='title'>{achievementData.content}</p>
      <p className='subtitle'>{achievementData.title}</p>
    </article>
  )
}
