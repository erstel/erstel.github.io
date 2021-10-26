import Screenshots from "../../Screenshots";
import "./index.css";

function Protosim() {
  document.title = "Protosim | Erstel Games";

  return (
    <div className="-protosim">
      <Screenshots protosim={true} interval={4000} />

      <div className="-protosim-content">
        <h2 className="mt-5 mb-4">
          Protosim
        </h2>

        <p>
          Your task is to rescue a group of humans from a military testing
          simulation. You're rescuing them from the
          <span className="-important"> Fears</span>.
        </p>

        <p>
          The Fears were designed for the military, but after gaining
          intelligence and self-awareness, they turned against us. Now, the only
          way we can rescue the humans without risking their death in real life
          is to lead them through a portal.
        </p>

        <p>
          In the sim you can <span className="-important">reverse time </span>
          and place <span className="-important">force fields</span> that freeze
          nearby Fears so you can lead each tester to safety.
        </p>

        <hr />

        <div>
          <a href="https://erstel.itch.io/protosim">Play for free</a>
        </div>
      </div>

    </div>
  )
}

export default Protosim;
