import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    to {
      transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid grey;
  border-radius: 50%;
  border-top-color: red;
  animation: ${spin} 1000ms infinite linear;
`;

export default Spinner;
