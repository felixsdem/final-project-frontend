
import { useEffect, useState } from 'react'
import './Movies.css'
import { getMovies, searchMovies } from '../../utils/ThirdPartyApi'
import Preloader from '../Preloader/Preloader'
import MovieCard from '../MovieCard/MovieCard'

function Movies() {
  const [movies, setMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [visibleMovies, setVisibleMovies] = useState(3)

  useEffect(() => {
    getMovies()
      .then((data) => {
        setMovies(data.results)
      })
      .catch(() => {
        setHasError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()

    const query = searchQuery.trim()

    if (!query) {
      return
    }

    setIsLoading(true)
    setHasError(false)
    setVisibleMovies(3)

    searchMovies(query)
      .then((data) => {
        setMovies(data.results)
      })
      .catch(() => {
        setHasError(true)
        setMovies([])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleShowMore = () => {
    setVisibleMovies((current) => current + 3)
  }

  if (isLoading) {
    return <Preloader />
  }

  return (
    <main className="movies">
      <section className="movies__content">
        <h1>Descubre películas</h1>

        <form className="movies__search" onSubmit={handleSearchSubmit}>
          <label className="movies__search-label" htmlFor="movie-search">
            Buscar películas por título
          </label>
          <div className="movies__search-controls">
            <input
              className="movies__search-input"
              id="movie-search"
              name="query"
              type="search"
              placeholder="Ej. Interstellar"
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            <button className="movies__search-button" type="submit">
              Buscar
            </button>
          </div>
        </form>

       {hasError ? (
  <p className="movies__error" role="alert">
    Lo sentimos, algo ha salido mal durante la solicitud. Es posible que
    haya un problema de conexión o que el servidor no funcione. Por favor,
    inténtalo más tarde.
  </p>
) : movies.length === 0 ? (
  <p>No se ha encontrado nada</p>
) : (
          <>
            <div className="movies__grid">
              {movies.slice(0, visibleMovies).map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>

            {visibleMovies < movies.length && (
              <button
                className="movies__show-more"
                type="button"
                onClick={handleShowMore}
              >
                Mostrar más
              </button>
            )}
          </>
        )}
      </section>
    </main>
  )
}

export default Movies
