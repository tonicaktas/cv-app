import React from 'react';
import { Link } from 'react-router';

const NavLink = props => (
  <Link {...props} activeClassName="active" /> // säter classs active till lnken som är

);

export default NavLink;
