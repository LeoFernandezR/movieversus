import React, { useState, useEffect } from 'react'

import './App.scss'

import Header from './components/layout/Header'
import Movie from './components/Movie'
import Tutorial from './components/Tutorial'
import useMovieData from './hooks/useMovieData'

function App() {
  const {
    firstMovieData,
    secondMovieData,
    setFirstMovieData,
    setSecondMovieData,
    achievementsResults,
  } = useMovieData()

  const [showWarning, setShowWarning] = useState(false)

  const areSameMovie = () => {
    if (firstMovieData.id !== undefined && secondMovieData.id !== undefined) {
      return firstMovieData.id === secondMovieData.id
    }
    return false
  }
  useEffect(() => {
    setShowWarning(areSameMovie())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstMovieData, secondMovieData])
  return (
    <>
      <Header />
      <div className='container'>
        {showWarning && (
          <div className='notification is-link'>
            {!areSameMovie && (
              <button
                className='delete'
                onClick={() => setShowWarning(false)}
              />
            )}
            You're comparing the same movie
          </div>
        )}
        <div className='columns'>
          <Movie
            setMovieData={setFirstMovieData}
            movieData={firstMovieData}
            achievementsResults={achievementsResults}
          />
          <Movie
            setMovieData={setSecondMovieData}
            movieData={secondMovieData}
            achievementsResults={achievementsResults}
          />
        </div>
        {Object.keys(firstMovieData).length ||
        Object.keys(secondMovieData).length ? (
          ''
        ) : (
          <Tutorial />
        )}
      </div>
    </>
  )
}

export default App
