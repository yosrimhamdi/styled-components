import React from 'react';
import styled from 'styled-components';

const Product = ({ name, price, className }) => {
  return (
    <li className={className}>
      <h4>{name}</h4>
      <p>{price}$</p>
    </li>
  );
};

export default styled(Product)`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 400px;
  background-color: #fff;
  margin-top: 1em;
  padding: 2em 1em;

  p {
    color: ${({ price }) => {
      if (price > 500) return 'green';
      if (price > 100) return 'red';

      return 'black';
    }};
  }
`;
