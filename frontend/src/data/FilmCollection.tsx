import { useEffect, useState } from 'react'
import { Movie } from '../types/movie'

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([])

  //useEffect helps the system not look for changes over and over again
  useEffect(() => {
    //This grabs the API side
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/Movie')
      const temp = await rsp.json()
      setMovieData(temp)
    }
    fetchMovie()
  }, [])

  return (
    <>
      <title>Films</title>
      <div className="text-center">
        <h3>The Collection</h3>
      </div>

      <br></br>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
              <th>LentTo</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {movieData.map((m) => (
              <tr key={m.movieId}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default MovieList
