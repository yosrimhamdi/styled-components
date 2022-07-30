import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const DefaultButton = styled.button`
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
`;

export const FancyButton = styled(DefaultButton)`
  background-color: green;
  border: 1px solid yellow;
`;

export const ChangedMUIButton = styled(Button)`
  text-transform: capitalize !important;
`;
