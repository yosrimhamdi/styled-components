import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Card from './components/Card';
import GlobalStyles from './global-styles';
import { darkTheme, lightTheme } from './themes';
import { Button } from './components/Buttons';
import Spinner from './components/Spinner';
import Form from './components/Form';
import List from './components/List';
import Products from './components/Products';

const App = () => {
  const [isLight, setIsLight] = useState(true);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyles />
      <List />
      <Products />
      <Form />
      <Card />
      <Spinner />
      <Button onClick={() => setIsLight(!isLight)}>Toggle theme</Button>
      <Button>Default button</Button>
      <Button large>Large button</Button>
      <Button as="a" href="https://www.mhamdi.co/" target="_blank">
        This is a link
      </Button>
    </ThemeProvider>
  );
};

export default App;
