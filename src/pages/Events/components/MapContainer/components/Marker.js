import React from 'react';

const K_SIZE = 20;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: K_SIZE / 8 + 'px solid #fff',
  borderRadius: K_SIZE,
  backgroundColor: '#00B92A',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: K_SIZE / 8 + 'px solid #999',
  color: '#f44336'
};

const Marker = (props) => {
  const style = props.$hover ? greatPlaceStyleHover : greatPlaceStyle;

  return (
     <div style={style}>
        {props.text}
     </div>
  );
}

export default Marker