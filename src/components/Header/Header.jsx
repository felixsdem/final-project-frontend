import './Header.css'
import Navigation from '../Navigation/Navigation'

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <a className="header__logo" href="/">
          Movie Explorer
        </a>

        <Navigation />
      </div>
    </header>
  )
}

export default Header
