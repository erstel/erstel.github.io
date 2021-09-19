import { NavLink } from 'react-router-dom';
import './index.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar position-fixed w-100 p-0">
        <NavLink exact to="/" className="h-100 px-5">
          logo
        </NavLink>
        <div className="h-100">
          <NavLink className="-page-link navbar-item d-inline-block h-100 px-5" to="/games" exact>
            Games
          </NavLink>
          <NavLink className="-page-link navbar-item d-inline-block h-100 px-5" to="/team" exact>
            Team
          </NavLink>
        </div>
      </nav>
      { /* Add space above content that matches the navbar height */ }
      <div className="-navbar-spacer"></div>
    </div>
  )
}

export default Navbar;