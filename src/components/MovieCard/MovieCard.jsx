function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      {movie.poster_path && (
        <img
          className="movie-card__image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`Póster de ${movie.title}`}
        />
      )}

      <h3 className="movie-card__title">{movie.title}</h3>

      <p className="movie-card__date">
        {movie.release_date || 'Fecha no disponible'}
      </p>

      <p className="movie-card__rating">
        Puntuación: {movie.vote_average}
      </p>

      <p className="movie-card__description">
        {movie.overview || 'Sin descripción disponible.'}
      </p>
    </article>
  )
}

export default MovieCard
