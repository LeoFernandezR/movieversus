import React from 'react'
import './App.scss'

import Header from './components/Header'
import Movie from './components/Movie'
import Tutorial from './components/Tutorial'

function App() {
  return (
    <>
      <Header />
			<div className="container">
				<div className="columns">
					<Movie />
					<Movie />
				</div>
				<Tutorial/>
			</div>
    </>
  )
}

export default App
