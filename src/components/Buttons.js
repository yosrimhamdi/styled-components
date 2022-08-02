import styled from 'styled-components';
import { Button as MUIButton } from '@material-ui/core';

export const Button = styled.button`
  width: 200px;
  text-align: center;
  background-color: blue;
  color: white;
  border: none;
  padding: 0.4em 0;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  margin-bottom: 0.5em;
  font-size: 1rem;
  text-decoration: none;
`;

export const FancyButton = styled(Button)`
  background-color: green;
  border: 1px solid yellow;
`;

export const ChangedMUIButton = styled(MUIButton)`
  text-transform: capitalize !important;
`;
