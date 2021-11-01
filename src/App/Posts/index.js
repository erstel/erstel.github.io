import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function Posts() {
  document.title = "Posts | Erstel Games";

  return (
    <div className="-posts container">
      <h2 className="mb-5">Blog Posts</h2>
      <ul>
        <NavLink to="/posts/releasing-protosim" exact>
          Releasing Protosim
        </NavLink>
      </ul>
    </div>
  );
}

export default Posts;
