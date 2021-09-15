import { NavLink } from 'react-router-dom';
import './index.css'

function Navbar() {
  return (
    <nav className="navbar position-fixed w-100 p-0">
      <NavLink exact to="/" className="h-100 px-5">
        logo
      </NavLink>
      <NavLink className="-page-link navbar-item h-100 px-5" to="/games" exact>
        Games
      </NavLink>
    </nav>
  )
}

export default Navbar;