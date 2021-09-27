import { useState } from 'react'

import "./index.css";

function Team() {
  document.title = "Meet the Team | Erstel Games";

  const [blurred, setBlurred] = useState(false);

  return (
    <div className="-team w-100 mt-5">
      <h1 className="display-4 text-center mb-5">Meet the team</h1>
      <div className="-team-summary row m-0 text-center mb-5">
        Erstel is an indie gamedev community. We foster an environment of content creation by releasing games and hosting game jams.
      </div>
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
          <div className="-team-member-info text-center px-4">
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
          <div className="-team-member-info text-center px-4">
            Co-owner, co-designer, developer and composer. When I'm not working
            on games, I like to hang out with friends and play Minecraft.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;