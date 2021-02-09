import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Autocomplete from './Autocomplete'
import Summary from './Summary'

export default function Movie() {
  const [movieID, setMovieID] = useState('')
  const [movieData, setMovieData] = useState({})
  const [showSummary, setShowSummary] = useState(false)

  useEffect(() => {
    const fetchMovieData = async (movieID) => {
      const response = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey: 'a288bc27',
          i: movieID,
        },
      })
      if (response.data.Error) {
        setMovieData({})
        return
      }
      setMovieData(response.data)
    }
    if (movieID !== '') {
      fetchMovieData(movieID)
    }
  }, [movieID])

  return (
    <div className='column'>
      <Autocomplete fetchMovieData={setMovieID} showSummary={setShowSummary} />
      {showSummary && <Summary movieData={movieData} />}
    </div>
  )
}
