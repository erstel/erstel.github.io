import { NavLink } from 'react-router-dom';
import './index.css'

function Navbar() {
  return (
    <nav className="navbar position-fixed w-100 px-5">
      <a href="/">E</a>
      <div>
        <NavLink className="navbar-item" to="/games" exact>
          Games
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;