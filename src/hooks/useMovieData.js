import { useEffect, useState } from 'react'

const useMovieData = () => {
  const [firstMovieData, setFirstMovieData] = useState({})
  const [secondMovieData, setSecondMovieData] = useState({})
  const [achievementsResults, setAchievementsResults] = useState([])

  const compareMovies = () => {
    if (
      Object.keys(firstMovieData).length &&
      Object.keys(secondMovieData).length
    ) {
      let achievements = []
      firstMovieData.Achievements.map((item, index) => {
        const { title: achievementTitle, stat: firstMovieStat } = item
        const { stat: secondMovieStat } = secondMovieData.Achievements[index]

        let winnerId = null
        winnerId =
          firstMovieStat > secondMovieStat ? firstMovieData.id : winnerId
        winnerId =
          firstMovieStat < secondMovieStat ? secondMovieData.id : winnerId

        return achievements.push({
          achievementTitle,
          winnerId,
        })
      })
      setAchievementsResults(achievements)
    }
  }
  useEffect(() => {
    compareMovies()
  }, [firstMovieData, secondMovieData])

  return {
    firstMovieData,
    secondMovieData,
    setFirstMovieData,
    setSecondMovieData,
    achievementsResults,
  }
}

export default useMovieData
