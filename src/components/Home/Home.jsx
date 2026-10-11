
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <div className="home__intro">
          <p className="home__eyebrow">TU PRÓXIMA HISTORIA EMPIEZA AQUÍ</p>

          <h1>Encuentra tu próxima película favorita</h1>

          <p className="home__description">
            Explora películas, descubre nuevas historias y encuentra qué ver
            después. Todo en un solo lugar, con información de TMDB.
          </p>

          <Link className="home__button" to="/peliculas">
            Explorar películas
            <span aria-hidden="true"> →</span>
          </Link>
        </div>

        <div className="home__visual" aria-hidden="true">
          <div className="home__visual-circle"></div>
          <div className="home__visual-card home__visual-card--back"></div>
          <div className="home__visual-card home__visual-card--front">
            <span>UNA BUENA HISTORIA</span>
            <strong>Empieza<br />con una película.</strong>
          </div>
        </div>
      </section>

      <section className="home__features">
        <div className="home__section-heading">
          <p className="home__eyebrow">DESCUBRE MÁS</p>
          <h2>El cine, a tu manera</h2>
          <p>
            Encuentra historias que encajen contigo y explora nuevas opciones.
          </p>
        </div>

        <div className="home__feature-grid">
          <article className="home__feature">
            <span className="home__feature-number">01</span>
            <h3>Descubre películas</h3>
            <p>
              Explora títulos y déjate sorprender por historias que todavía
              no conoces.
            </p>
          </article>

          <article className="home__feature">
            <span className="home__feature-number">02</span>
            <h3>Busca por título</h3>
            <p>
              Encuentra una película concreta escribiendo su nombre en el
              buscador.
            </p>
          </article>

          <article className="home__feature">
            <span className="home__feature-number">03</span>
            <h3>Consulta información</h3>
            <p>
              Revisa las sinopsis, las fechas de estreno y las puntuaciones
              disponibles.
            </p>
          </article>
        </div>
      </section>

      <section className="home__cta">
        <div>
          <p className="home__eyebrow">¿QUÉ VEMOS HOY?</p>
          <h2>Tu siguiente descubrimiento te espera.</h2>
        </div>

        <Link className="home__button home__button--light" to="/peliculas">
          Ir al catálogo
          <span aria-hidden="true"> →</span>
        </Link>
      </section>
    </main>
  )
}

export default Home
