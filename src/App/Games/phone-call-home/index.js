import React from "react";
import Screenshots from "../../Screenshots";
import "./index.css";

function PhoneCallHome() {
  document.title = "Phome Call Home | Erstel Games";

  return (
    <div className="-phone-call-home">
      <Screenshots phoneCallHome={true} interval={4000} />
      <div className="-phone-call-home-content">
        <h2 className="mt-5 mb-4">
          Phone Call Home
        </h2>

        <p>
          When your ship crashes on an unknown planet, you parachute out and land in a city... but there are no people, just bots.
        </p>
        <p>
          Can you use this city to establish communication with Earth?
        </p>

        <div className="mt-5">
          <a href="https://erstel.itch.io/phone-call-home">Download for free</a>
        </div>
      </div>
    </div>
  )
}

export default PhoneCallHome;
