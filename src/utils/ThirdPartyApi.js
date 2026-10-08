const BASE_URL = 'https://api.themoviedb.org/3'

const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export function getMovies(page = 1) {
  return fetch(
    `${BASE_URL}/discover/movie?language=es-ES&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json',
      },
    },
  ).then((response) => {
    if (!response.ok) {
      throw new Error('Error en la solicitud')
    }

    return response.json()
  })
}
