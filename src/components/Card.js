import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <Wrapper>
      <img src="" alt="card here" />
      <p>description is here</p>
      <p>description is here</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid yellow;
  width: 300px;

  img {
    border: 1px solid red;
    display: block;
  }

  p {
    color: var(--test);
  }
`;

export default Card;
