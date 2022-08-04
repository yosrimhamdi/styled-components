import React from 'react';
import styled, { css } from 'styled-components';

const fruits = ['banana', 'orange', 'mango', 'lemon'];

const Item = styled.li`
  list-style: none;
  padding: 1em;

  ${({ isOdd }) =>
    isOdd &&
    css`
      background-color: grey;
      color: white;
    `}
`;

const List = () => {
  const renderedFruits = fruits.map((fruit, i) => (
    <Item key={i} isOdd={i % 2 !== 0}>
      {fruit}
    </Item>
  ));

  return <ul>{renderedFruits}</ul>;
};

export default List;

/** APPLYING STYLES BASED ON A (1) CONDITION
 * If styles on an element will change based on a condition
 *  Created a separate styled component and pass props into it.
 */
