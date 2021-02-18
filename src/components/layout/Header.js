import React from 'react'
import { InlineIcon } from '@iconify/react-with-api'

export default function Header() {
  return (
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title is-1 has-text-centered'>
            Movie Fight <InlineIcon icon='emojione:admission-tickets' />
          </h1>
        </div>
      </div>
    </section>
  )
}
