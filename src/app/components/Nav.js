import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
      </li>
      <li>
        <Link to="/users">Users</Link> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
      </li>
    </ul>
  </nav>
);

export default Nav;
