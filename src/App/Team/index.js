import { useState } from 'react'

import "./index.css";

function Team() {
  const [blurred, setBlurred] = useState(false);

  return (
    <div className="-team w-100 mt-5">
      <h1 className="display-4 mb-5">Meet the team</h1>
      <div className="-team-top-line row m-0"></div>
      <div className="row w-100 m-0">
        <div
          className="col w-100 m-0 p-0"
          onMouseEnter={() => setBlurred(true)}
          onMouseLeave={() => setBlurred(false)}
          >
          <img
            src="/images/daniel.jpg"
            alt="Daniel Kelly"
            className={"-team-image" + (blurred ? " -team-image-blurred" : "")}
            />
          <h2 className="display-5 text-center mt-0">Daniel Kelly</h2>
          <div className="-team-member-info text-center">
            Co-owner, co-designer, artist, level designer. I have a full time
            job, but when I am not doing that, I like to put time towards making
            games.
          </div>
        </div>
        <div
          className="col m-0 p-0"
          onMouseEnter={() => setBlurred(true)}
          onMouseLeave={() => setBlurred(false)}
          >
          <img
            src="/images/caleb.jpg"
            alt="Caleb Sacks"
            className={"-team-image" + (blurred ? " -team-image-blurred" : "")}
            />
          <h2 className="display-5 text-center mt-0">Caleb Sacks</h2>
          <div className="-team-member-info text-center">
            Co-owner, co-designer, developer and composer. When I'm not working
            on games, I like to hang out with friends and play Minecraft.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;