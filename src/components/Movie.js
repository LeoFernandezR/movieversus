import React from 'react'

import Autocomplete from './Autocomplete'
import Summary from './Summary'

export default function Movie() {
  return (
    <div className='column'>
      <Autocomplete />
      <Summary />
    </div>
  )
}
