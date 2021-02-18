import React from 'react'

import Achievement from './Achievement'

export default function Summary({ movieData, achievementsResults }) {
  const { id, Poster, Title, Genre, Plot, Achievements = [] } = movieData || {}

  return (
    <div className='summary'>
      <article className='movie-description'>
        <div className='image poster'>
          <img src={Poster} alt='movie-poster' />
        </div>
        <div className='movie-details'>
          <div className='content'>
            <h1>{Title}</h1>
            <h4>{Genre}</h4>
            <p>{Plot}</p>
          </div>
        </div>
      </article>
      <div className='movie-achievements'>
        {Achievements.map((achievement, index) => {
          const achievementResult = achievementsResults[index]

          const { winnerId = null } = achievementResult || {}

          return (
            <Achievement
              key={achievement.title}
              achievementData={achievement}
              winner={winnerId === id || winnerId === null}
            />
          )
        })}
      </div>
    </div>
  )
}
