import Intro from './Intro';
import "./index.css";

function Home() {
  document.title = "Home | Erstel Games";

  return (
    <div className="-home d-flex align-items-center justify-content-center">
      <Intro />
    </div>
  );
}

export default Home;