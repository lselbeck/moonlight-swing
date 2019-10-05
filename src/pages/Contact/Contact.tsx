import React, { Component } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import ContactForm from './components/ContactForm';

export default class Contact extends Component<{}, { eventTypes: string[] }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      eventTypes: ['parties', 'dances', 'receptions', 'fund raisers'],
    };
  }

  render() {
    return (
      <section id="contact">
        <div className="container" id="contact-container">
          <div className="row mb-4">
            <div className="col-12">
              <h1 className="vocalists-title">Book Now!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <h2>Dont be shy, contact us today! We are available for:</h2>
              {this.state.eventTypes.map((type, i) => (
                <p className="my-2 ml-4" key={i}>
                  <FaChevronRight />
                  <span className="text-capitalize">{type}</span>
                </p>
              ))}
              <p className="mt-4">
                Fill out the form, or email Mark directly at{' '}
                <a href="mailto:mark.kunz@comcast.net">mark.kunz@comcast.net</a>
              </p>
            </div>
            <div className="col-12 col-md-6">
              <ContactForm />
            </div>
          </div>
          <div className="row" />
        </div>
      </section>
    );
  }
}
