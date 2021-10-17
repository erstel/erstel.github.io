import Intro from './Intro';
import "./index.css";

function Home() {
  document.title = "Home | Erstel Games";

  return (
    <div className="-home">
      <Intro />
    </div>
  );
}

export default Home;