import Screenshots from "../../Screenshots";
import "./index.css";

function Protosim() {
  document.title = "Protosim | Erstel Games";

  return (
    <div className="-protosim">
      <Screenshots protosim={true} interval={4000} />

      <div className="-protosim-content">
        <h1 className="display-4 mt-5 mb-4">
          Protosim
        </h1>

        <p>
          Rescue a group of testers from a simulation gone wrong...
        </p>

        <div>
          <em>
            Protosim will be released on October 29th at 8 PM CST / 9 PM EST.
            Join the <a href="https://discord.gg/2bvBxkG">discord server</a> to stay up to date!
          </em>
        </div>
      </div>

    </div>
  )
}

export default Protosim;
