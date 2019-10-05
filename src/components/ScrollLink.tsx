import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = (props: { to: string; className?: string; children?: any }) => (
  <Link {...props} spy={true} smooth={true} duration={800}>
    {props.children}
  </Link>
);

export default ScrollLink;
