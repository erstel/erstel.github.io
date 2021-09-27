import { NavLink } from "react-router-dom";
import "./index.css";

function Posts() {
  return (
    <div className="-posts">
      <h1 className="display-4 mb-5">Blog Posts</h1>
      <ul>
        <NavLink to="/posts/draft-releasing-protosim" exact>
          Releasing Protosim
        </NavLink>
      </ul>
    </div>
  );
}

export default Posts;
