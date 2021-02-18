export const structureData = (data) => {
  if (!Object.keys(data).length) {
    return data
  }
  const {
    imdbID,
    Poster,
    Title,
    Genre,
    Plot,
    Awards,
    BoxOffice = null,
    Metascore,
    imdbRating,
    imdbVotes,
  } = data

  const boxOfficeNumber = parseInt(
    BoxOffice ? BoxOffice.replace(/\$/g, '').replace(/,/g, '') : 0
  )
  const metascoreNumber = parseInt(Metascore)
  const imdbRatingNumber = parseFloat(imdbRating)
  const imdbVotesNumber = parseInt(imdbVotes.replace(/,/g, ''))

  const sumOfAwards = Awards.split(' ').reduce((prev, word) => {
    const value = parseInt(word)
    if (isNaN(value)) {
      return prev
    } else {
      return prev + value
    }
  }, 0)

  return {
    id: imdbID,
    Poster,
    Title,
    Genre,
    Plot,
    Achievements: [
      {
        title: 'Awards',
        content: Awards,
        isLoser: false,
        stat: sumOfAwards,
      },
      {
        title: 'Box Office',
        content: BoxOffice,
        isLoser: false,
        stat: boxOfficeNumber,
      },
      {
        title: 'Metascore',
        content: Metascore,
        isLoser: false,
        stat: metascoreNumber,
      },
      {
        title: 'IMDB Rating',
        content: imdbRating,
        isLoser: false,
        stat: imdbRatingNumber,
      },
      {
        title: 'IMDB Votes',
        content: imdbVotes,
        isLoser: false,
        stat: imdbVotesNumber,
      },
    ],
  }
}
