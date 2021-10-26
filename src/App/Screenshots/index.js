import React from "react";
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "./style.css";

function Screenshots(props) {
  const items = [
    props.phoneCallHome ?
    (
      <div>
        <img
          className="d-block h-100"
          src="/images/screenshots/phone-call-home/0.png"
          alt="Screenshot of Phone Call Home"
          />
      </div>
    ) : null,

    props.phoneCallHome ?
    (
      <div>
        <img
          className="d-block h-100"
          src="/images/screenshots/phone-call-home/1.png"
          alt="Screenshot of Phone Call Home"
          />
      </div>
    ) : null,

    props.protosim ?
    (
      <div>
        <img
          className="d-block h-100"
          src="/images/screenshots/protosim/0.png"
          alt="Screenshot of Protosim"
          />
      </div>
    ) : null,

    props.phoneCallHome ?
    (
      <div>
        <img
          className="d-block h-100"
          src="/images/screenshots/phone-call-home/2.png"
          alt="Screenshot of Phone Call Home"
          />
      </div>
    ) : null,

    props.protosim ?
    (
      <div>
        <img
          className="d-block h-100"
          src="/images/screenshots/protosim/1.png"
          alt="Screenshot of Protosim"
          />
      </div>
    ) : null,

    props.protosim ?
    (
      <div>
        <img
          className="d-block h-100"
          src="/images/screenshots/protosim/2.png"
          alt="Screenshot of Protosim"
          />
      </div>
    ) : null,

    props.phoneCallHome ?
    (
      <div>
        <img
          className="d-block h-100"
          src="/images/screenshots/phone-call-home/3.png"
          alt="Screenshot of Phone Call Home"
          />
      </div>
    ) : null,

    props.protosim ?
    (
      <div>
        <img
          className="d-block h-100"
          src="/images/screenshots/protosim/3.png"
          alt="Screenshot of Protosim"
          />
      </div>
    ) : null
  ].filter(item => !!item);

  return (
    <div className="-carousel">
      <ReactBootstrapCarousel
        className="carousel-fade"
        animation={true}
        autoplay={true}
        slideshowSpeed={props.interval}
        defaultActiveIndex={0}
        version={4}
      >

        {items}

      </ReactBootstrapCarousel>
    </div>
  );
}

export default Screenshots;
