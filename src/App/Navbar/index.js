import { NavLink } from 'react-router-dom';
import './index.css'

const baseNavLinkClasses = "-page-link navbar-item d-inline-block px-2 px-sm-5 px-md-5 px-lg-5 px-xl-5";

function Navbar() {
  return (
    <div>
      <nav className="navbar position-fixed w-100 p-0">
        <NavLink exact to="/" className="h-100 px-5">
          <img src="/logo512.png" alt="Logo" />
        </NavLink>
        <div className="h-100">
          <NavLink
            className={baseNavLinkClasses}
            to="/games"
            exact
            >
            Games
          </NavLink>

          <NavLink
            className={baseNavLinkClasses}
            to="/posts"
            exact
            >
            Posts
          </NavLink>

          <NavLink
            className={`${baseNavLinkClasses} pr-4`}
            to="/team"
            exact
            >
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