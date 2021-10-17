import Intro from './Intro';
import "./index.css";
import Carousel from "./Carousel";

function Home() {
  document.title = "Home | Erstel Games";

  return (
    <div className="-home h-100">
      <Carousel />

      <div className="-home-container">
        <Intro />
      </div>
    </div>
  );
}

export default Home;