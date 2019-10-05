import React from 'react';
import ButtonLink from '../../components/ButtonLink';

const Intro = () => (
  <section id="intro">
    <div className="container" id="intro-container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 d-flex justify-content-center">
          <h3>Playing the classic sounds of big band music since 1903</h3>
        </div>
      </div>
      <div className="row justify-content-center align-items-center mt-4">
        <div className="col-4 col-md-3 d-flex justify-content-center">
          <ButtonLink className="intro-button" color="secondary" to="info">
            Learn More
          </ButtonLink>
        </div>
        <div className="col-4 col-md-3 d-flex justify-content-center">
          <ButtonLink className="intro-button" color="secondary" to="events">
            Upcoming Events
          </ButtonLink>
        </div>
        <div className="col-4 col-md-3 d-flex justify-content-center">
          <ButtonLink className="intro-button" color="secondary" to="contact">
            Book Now
          </ButtonLink>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
