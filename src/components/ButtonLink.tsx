import React from 'react';
import { Button } from 'reactstrap';
import ScrollLink from './ScrollLink';

const ButtonLink = (props: { to: string; className: string; children?: any }) => (
  <ScrollLink to={props.to}>
    <Button {...props} style={{ borderRadius: 500 }}>
      {props.children}
    </Button>
  </ScrollLink>
);

export default ButtonLink;
