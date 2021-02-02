import React, { useState, useEffect } from 'react'
import axios from 'axios'

import useDebounce from '../hooks/useDebounce'

export default function Autocomplete() {
  const [searchValue, setSearchValue] = useState('')
  const [movieList, setMovieList] = useState([])
  const debouncedText = useDebounce(searchValue, 500)
  const [dropdownActive, setDropdownActive] = useState(false)

  useEffect(() => {
    const fetchMovieList = async (searchTerm) => {
      const response = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey: 'a288bc27',
          s: searchTerm,
        },
      })
      if (response.data.Error) {
        setMovieList([])
        return
      }
      setMovieList(response.data.Search)
    }

    fetchMovieList(debouncedText)
  }, [debouncedText])

  const onInput = (e) => {
    setSearchValue(e.target.value)
    if (movieList.length) {
      setDropdownActive(true)
    }
    setDropdownActive(false)
    return
  }

  return (
    <div>
      <label className='has-text-weight-bold'>Search</label>
      <input type='text' className='input' onChange={onInput} />
      <div className={`dropdown ${dropdownActive && 'is-active'}`}>
        <div className='dropdown-content results'>
          {movieList.map((movie) => {
            const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster

            return (
              <a className='dropdown-item'>
                <img src={imgSrc} alt='' />
                {` ${movie.Title}`}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
