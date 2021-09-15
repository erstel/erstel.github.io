import "./index.css";

function About() {
  return (
    <div className="-about w-100">
      <h1 className="display-4">About us</h1>
      <div className="-about-section mt-4">
        <p>We are an indie gamedev startup, yadda yadda yadda...</p>
      </div>

      <h1 className="display-4">Meet the team</h1>
      <div className="row mt-4">
        <div className="col">
          Daniel Kelly
        </div>
        <div className="col">
          Caleb Sacks
        </div>
      </div>
    </div>
  );
}

export default About;