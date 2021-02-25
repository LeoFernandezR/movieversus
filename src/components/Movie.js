import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Autocomplete from './Autocomplete'
import Summary from './Summary'
import { structureData } from '../utils/movies'

export default function Movie({
  setMovieData,
  movieData,
  achievementsResults,
}) {
  const [movieID, setMovieID] = useState('')
  const [showSummary, setShowSummary] = useState(false)

  useEffect(() => {
    const fetchMovieData = async (movieID) => {
      const response = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey: process.env.REACT_APP_OMDB_API_KEY,
          i: movieID,
        },
      })
      if (response.data.Error) {
        setMovieData({})
        return
      }
      setMovieData(structureData(response.data))
    }
    if (movieID !== '') {
      fetchMovieData(movieID)
    }
  }, [movieID])

  return (
    <div className='column'>
      <Autocomplete fetchMovieData={setMovieID} showSummary={setShowSummary} />
      {showSummary && (
        <Summary
          movieData={movieData}
          achievementsResults={achievementsResults}
        />
      )}
    </div>
  )
}
