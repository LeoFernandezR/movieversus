import React from 'react'

import Achievement from './Achievement'

export default function Summary({ movieData }) {
  const {
    Poster,
    Title,
    Genre,
    Plot,
    Awards,
    BoxOffice,
    Metascore,
    imdbRating,
    imdbVotes,
  } = movieData

  const achievements = [
    {
      title: 'Awards',
      content: Awards,
    },
    {
      title: 'Box Office',
      content: BoxOffice,
    },
    {
      title: 'Metascore',
      content: Metascore,
    },
    {
      title: 'IMDB Rating',
      content: imdbRating,
    },
    {
      title: 'IMDB Votes',
      content: imdbVotes,
    },
  ]

  console.log(movieData)

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
        {achievements.map((achievementData) => {
          return (
            <Achievement
              key={achievementData.title}
              achievementData={achievementData}
            />
          )
        })}
      </div>
    </div>
  )
}
