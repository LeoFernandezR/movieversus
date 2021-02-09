/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from 'react'
import axios from 'axios'

import useDebounce from '../hooks/useDebounce'

export default function Autocomplete({ fetchMovieData, showSummary }) {
  const [movieList, setMovieList] = useState([])
  const [movieSearch, setMovieSearch] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const debouncedMovieSearch = useDebounce(movieSearch, 500)

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
      setShowDropdown(true)
    }
    if (debouncedMovieSearch !== '') {
      fetchMovieList(debouncedMovieSearch)
    }
    setShowDropdown(false)
  }, [debouncedMovieSearch])

  const onInput = (e) => {
    setMovieSearch(e.target.value)
    setInputValue(e.target.value)
  }
  return (
    <div className='autocomplete'>
      <div className={`dropdown ${showDropdown && 'is-active'}`}>
        <div className='dropdown-trigger'>
          <label htmlFor='autocomplete' className='has-text-weight-bold'>
            Search
          </label>
          <input
            value={inputValue}
            type='text'
            className='input'
            name='autocomplete'
            onInput={onInput}
          />
        </div>
        <div className='dropdown-menu'>
          <div className='dropdown-content results'>
            {movieList.map((movie) => {
              const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster

              return (
                <a
                  key={movie.imdbID}
                  className='dropdown-item'
                  onClick={() => {
                    fetchMovieData(movie.imdbID)
                    showSummary(true)
                    setShowDropdown(false)
                    setInputValue(movie.Title)
                  }}
                >
                  <img src={imgSrc} />
                  {movie.Title}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
