import React from "react";
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "./style.css";

function Carousel() {
  return (
    <div className="-carousel">
      <ReactBootstrapCarousel
        className="carousel-fade"
        animation={true}
        autoplay={true}
        slideshowSpeed={3000}
        defaultActiveIndex={0}
        version={4}
      >
        <div>
          <img
            className="d-block w-100"
            src="/images/screenshots/phone-call-home/0.png"
            alt="Screenshot of Phone Call Home"
            />
        </div>

        <div>
          <img
            className="d-block w-100"
            src="/images/screenshots/phone-call-home/1.png"
            alt="Screenshot of Phone Call Home"
            />
        </div>

        <div>
          <img
            className="d-block w-100"
            src="/images/screenshots/protosim/0.png"
            alt="Screenshot of Protosim"
            />
        </div>

        <div>
          <img
            className="d-block w-100"
            src="/images/screenshots/phone-call-home/2.png"
            alt="Screenshot of Phone Call Home"
            />
        </div>

        <div>
          <img
            className="d-block w-100"
            src="/images/screenshots/protosim/1.png"
            alt="Screenshot of Protosim"
            />
        </div>

        <div>
          <img
            className="d-block w-100"
            src="/images/screenshots/protosim/2.png"
            alt="Screenshot of Protosim"
            />
        </div>

        <div>
          <img
            className="d-block w-100"
            src="/images/screenshots/phone-call-home/3.png"
            alt="Screenshot of Phone Call Home"
            />
        </div>

        <div>
          <img
            className="d-block w-100"
            src="/images/screenshots/protosim/3.png"
            alt="Screenshot of Protosim"
            />
        </div>

      </ReactBootstrapCarousel>
    </div>
  );
}

export default Carousel;
