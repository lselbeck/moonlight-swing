import React from 'react'
import Scroll, { Link } from 'react-scroll'

const ScrollLink = (props) => <Link {...props} spy={true} smooth={true} duration={500}>{props.children}</Link>

export default ScrollLink