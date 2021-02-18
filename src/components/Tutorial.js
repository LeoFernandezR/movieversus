import React from 'react'

export default function Tutorial() {
  return (
    <div className='column is-half notification is-primary tutorial'>
      <h1 className='tutorial subtitle'>Search for a Movie on both sides.</h1>
      <p>
        The <span className='has-text-weight-bold'>WINNER</span> side will stay
        the same and the <span className='has-text-weight-bold'>LOSER</span>{' '}
        side will change its color
      </p>
      <br />
      <p>We will tell you which is the best!</p>
    </div>
  )
}
