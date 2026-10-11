
import './Preloader.css'

function Preloader() {
  return (
    <div className="preloader" role="status" aria-live="polite">
      <span className="preloader__spinner" aria-hidden="true"></span>
      <p className="preloader__text">Cargando...</p>
    </div>
  )
}

export default Preloader
