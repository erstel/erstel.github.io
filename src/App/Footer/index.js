import React from "react";
import "./index.css";

function Footer() {
  return (
    <div className="-footer container-fluid">
      <div className="row">
        <div className="col"></div>
        <div className="-footer-copyright col text-muted">
          <small>Copyright &copy; 2021 Erstel</small>
        </div>

        <div className="-footer-social-media-links col">
          <a href="https://discord.gg/2bvBxkG" target="_blank" rel="noopener noreferrer">
            <img src="/images/social/discord.png" alt="Discord" className="mr-3" />
          </a>

          <a href="https://erstel.itch.io/" target="_blank" rel="noopener noreferrer">
            <img src="/images/social/itch.png" alt="Itch" className="mr-3" />
          </a>

          <a href="https://twitter.com/erstelgames" target="_blank" rel="noopener noreferrer">
            <img src="/images/social/twitter.png" alt="Twitter" className="mr-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
