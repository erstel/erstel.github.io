import React from "react";
import PropTypes from "prop-types";
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "./style.css";

function Screenshots(props) {
  const items = [
    props.phoneCallHome ?
      (
        <div key={0}>
          <img
            className="d-block h-100"
            src="/images/screenshots/phone-call-home/0.png"
            alt="Screenshot of Phone Call Home"
          />
        </div>
      ) : null,

    props.phoneCallHome ?
      (
        <div key={1}>
          <img
            className="d-block h-100"
            src="/images/screenshots/phone-call-home/1.png"
            alt="Screenshot of Phone Call Home"
          />
        </div>
      ) : null,

    props.protosim ?
      (
        <div key={2}>
          <img
            className="d-block h-100"
            src="/images/screenshots/protosim/0.png"
            alt="Screenshot of Protosim"
          />
        </div>
      ) : null,

    props.phoneCallHome ?
      (
        <div key={3}>
          <img
            className="d-block h-100"
            src="/images/screenshots/phone-call-home/2.png"
            alt="Screenshot of Phone Call Home"
          />
        </div>
      ) : null,

    props.protosim ?
      (
        <div key={4}>
          <img
            className="d-block h-100"
            src="/images/screenshots/protosim/1.png"
            alt="Screenshot of Protosim"
          />
        </div>
      ) : null,

    props.protosim ?
      (
        <div key={5}>
          <img
            className="d-block h-100"
            src="/images/screenshots/protosim/2.png"
            alt="Screenshot of Protosim"
          />
        </div>
      ) : null,

    props.phoneCallHome ?
      (
        <div key={6}>
          <img
            className="d-block h-100"
            src="/images/screenshots/phone-call-home/3.png"
            alt="Screenshot of Phone Call Home"
          />
        </div>
      ) : null,

    props.protosim ?
      (
        <div key={7}>
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

Screenshots.propTypes = {
  phoneCallHome: PropTypes.bool.isRequired,
  protosim: PropTypes.bool.isRequired,
  interval: PropTypes.number.isRequired
}

export default Screenshots;
