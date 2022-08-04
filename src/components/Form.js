import React from 'react';
import styled, { css } from 'styled-components/macro';

const Form = () => {
  return (
    <div>
      <h2>some random stuff</h2>
      <Button>click me</Button>
      <form
        css={`
          width: 300px;
          background: #fff;
          padding: 2rem;
          margin-right: 1rem;
        `}
      >
        <h2>Form</h2>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input />
        <Button type="submit">submit here</Button>
      </form>
    </div>
  );
};

const Button = styled.button.attrs(({ type }) => ({
  type: type ?? 'button',
}))`
  color: white;
  background-color: blue;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  font-size: 1rem;

  ${({ type }) =>
    type === 'submit' &&
    css`
      display: block;
      width: 100%;
      border-radius: 3px;
    `}
`;

const Input = styled.input.attrs(({ type, placeholder }) => ({
  type: type ?? 'text',
  placeholder: placeholder ?? 'Please enter value',
}))`
  display: block;
  width: 100%;
  padding: 0.5em 1em;
  margin-bottom: 1em;
`;

export default Form;
