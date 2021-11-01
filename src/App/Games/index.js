import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function Games() {
  document.title = "Games | Erstel Games";

  /*
    return a nested grid.  The first grid distributes screen space to each game,
    with each cell expanding its height to fill the screen. The inner grid
    vertically aligns the h2 within each of the outer cells.
   */
  return (
    <div className="container h-100">
      <div className="row h-100">
        <NavLink exact to="/games/protosim" className="-game-link col h-100">
          <div className="row h-100 align-items-center">
            <h3 className="col text-center">
              Protosim
            </h3>
          </div>
        </NavLink>
        <NavLink exact to="/games/phone-call-home" className="-game-link col">
          <div className="row h-100 align-items-center">
            <h3 className="col text-center">
              Phone Call Home
            </h3>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Games;
