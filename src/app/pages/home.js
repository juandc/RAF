import React, { Fragment } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: red;
`;

const Home = () => (
  <Fragment>
    Hello! This is Home!! <Button>Hiii!</Button>
  </Fragment>
);

export default Home;
