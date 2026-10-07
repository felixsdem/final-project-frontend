import { useEffect, useState } from 'react'
import './Movies.css'
import { getMovies } from '../../utils/ThirdPartyApi'
import Preloader from '../Preloader/Preloader'
import MovieCard from '../MovieCard/MovieCard'

function Movies() {
  const [movies, setMovies] = useState([])
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

  const handleShowMore = () => {
    setVisibleMovies((current) => current + 3)
  }

  if (isLoading) {
    return <Preloader />
  }

  if (hasError) {
    return (
      <main className="movies">
        <p>
          Lo sentimos, algo ha salido mal durante la solicitud. Es posible que
          haya un problema de conexión o que el servidor no funcione. Por
          favor, inténtalo más tarde
        </p>
      </main>
    )
  }

  return (
    <main className="movies">
      <section className="movies__content">
        <h1>Descubre películas</h1>

        {movies.length === 0 ? (
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
