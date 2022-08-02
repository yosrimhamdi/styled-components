import React from 'react';
import styled from 'styled-components';

const Card = ({ className }) => (
  <div className={className}>
    <img src="https://picsum.photos/500/500" alt="card here" />
    <div>
      <h3>Product name</h3>
      <p>$15</p>
    </div>
  </div>
);

export default styled(Card)`
  max-width: 300px;
  border-radius: 5px;
  overflow: hidden;
  margin: 2em auto;
  transition: box-shadow 200ms;
  box-shadow: 0 0 3px 1px var(--shadow);
  cursor: pointer;

  @media screen and (min-width: 800px) {
    max-width: 400px;
  }

  &:hover {
    box-shadow: 0 0 10px 2px var(--shadow);
  }

  img {
    display: block;
    width: 100%;
  }

  div {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    background-color: white;
  }

  p {
    color: blue;
    font-weight: 600;
  }
`;
