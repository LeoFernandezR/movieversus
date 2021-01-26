import React from 'react'

export default function Autocomplete() {
  return (
    <div className="column">
      <label className="has-text-weight-bold">Search</label>
      <input type="text" className="input"/>
      <div className="dropdown">
        <div className="dropdown-content results"></div>
      </div>
    </div>
  )
}
