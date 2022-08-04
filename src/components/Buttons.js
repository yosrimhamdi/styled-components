import styled, { css } from 'styled-components';
import { Button as MUIButton } from '@material-ui/core';

export const Button = styled.button`
  text-align: center;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  margin-bottom: 0.5em;
  text-decoration: none;
  ${({ large }) =>
    large
      ? css`
          width: 400px;
          font-size: 1.2rem;
          padding: 0.9em 0;
        `
      : css`
          width: 200px;
          font-size: 1rem;
          padding: 0.4em 0;
        `}
`;

export const FancyButton = styled(Button)`
  background-color: green;
  border: 1px solid yellow;
`;

export const ChangedMUIButton = styled(MUIButton)`
  text-transform: capitalize !important;
`;
