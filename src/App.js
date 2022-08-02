import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Card from './components/Card';
import GlobalStyles from './global-styles';
import { darkTheme, lightTheme } from './themes';
import { Button } from './components/Buttons';
import Spinner from './components/Spinner';

const App = () => {
  const [isLight, setIsLight] = useState(true);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Card />
      <Button onClick={() => setIsLight(!isLight)}>Toggle theme</Button>
      <Button>One</Button>
      <Button as="a" href="https://www.mhamdi.co/" target="_blank">
        This is a link
      </Button>
      <Spinner />
    </ThemeProvider>
  );
};

export default App;
