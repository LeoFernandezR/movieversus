import React from 'react'
import './App.scss'

import Header from './components/Header'
import Autocomplete from './components/Autocomplete'

function App() {
  return (
    <>
      <Header />
			<div className="container">
				<div className="columns">
					<Autocomplete />
					<Autocomplete />
				</div>
			</div>
    </>
  )
}

export default App
