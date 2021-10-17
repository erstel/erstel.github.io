import Intro from './Intro';
import "./index.css";
import Screenshots from "../Screenshots";

function Home() {
  document.title = "Home | Erstel Games";

  return (
    <div className="-home h-100">
      <Screenshots phoneCallHome={true} protosim={true} interval={3000} />

      <div className="-home-container">
        <Intro />
      </div>
    </div>
  );
}

export default Home;