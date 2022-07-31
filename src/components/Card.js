import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils';

const Card = ({ className }) => (
  <div className={className}>
    <img src="" alt="card here" />
    <p>description is here</p>
    <p>description is here</p>
  </div>
);

export default styled(Card)`
  border: 1px solid yellow;
  width: 300px;

  img {
    border: 1px solid red;
    display: block;
  }

  p {
    color: ${colors.test};
  }
`;
