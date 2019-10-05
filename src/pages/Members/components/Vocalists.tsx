import React from 'react';

interface VocalistsProps {
  vocalists: VocalistProps[];
}

interface VocalistProps {
  img: string;
  name: string;
}

const Vocalist = (props: VocalistProps) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-5">
    <div className="row">
      <div className="col-5 col-lg-4">
        <img src={props.img} alt={props.name} className="img-fluid rounded-circle" />
      </div>
      <div className="col-7 d-flex align-items-center">
        <h2>{props.name}</h2>
      </div>
    </div>
  </div>
);

const Vocalists = (props: VocalistsProps) => (
  <div className="row justify-content-around vocalists-row">
    <div className="col-12 mb-4">
      <h1 className="vocalists-title">Vocalists</h1>
    </div>
    {props.vocalists.map((vocalist: VocalistProps, i) => (
      <Vocalist {...vocalist} key={i} />
    ))}
  </div>
);

export default Vocalists;
