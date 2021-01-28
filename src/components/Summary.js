import React from 'react'

export default function Summary() {
  return (
    <div>
      <article className="movie-description">
        <div className="image poster">
            <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" alt="theavengers"/>
        </div>
        <div className="movie-details">
          <div className="content">
            <h1>The Avengers</h1>
            <h4>Fiction</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime facere, cum deleniti architecto minima velit asperiores libero deserunt dolorum numquam magnam aliquam alias quae voluptates dolorem porro maiores unde eveniet!</p>
          </div>
        </div>
      </article>

      <article className="notification is-primary">
        <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className="subtitle">Awards</p>
      </article>

      <article className="notification is-primary">
        <p className="title">$623,357,910</p>
        <p className="subtitle">Box Office</p>
      </article>

      <article className="notification is-primary">
        <p className="title">69</p>
        <p className="subtitle">Metascore</p>
      </article>

      <article className="notification is-primary">
        <p className="title">8.0</p>
        <p className="subtitle">IMDB Rating</p>
      </article>

      <article className="notification is-primary">
        <p className="title">1,257,956</p>
        <p className="subtitle">IMDB Votes</p>
      </article>
    </div>
  )
}
