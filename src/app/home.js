import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <ul>
    <li>
      <Link to="/products">Products</Link>{" "}
      {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
    </li>
    <li>
      <Link to="/posts">Posts</Link>{" "}
      {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
    </li>
    <li>
      <Link to="/users">Users</Link>{" "}
      {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
    </li>
  </ul>
);
