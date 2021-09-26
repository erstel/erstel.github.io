import React from "react";
import "./index.css";

function Footer() {
  return (
    <div className="-footer">
      <div className="text-muted">Copyright &copy; 2021 Erstel</div>

      <div className="-footer-social-media-links">
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
  );
}
export default Footer;
