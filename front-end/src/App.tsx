import React from 'react';
import GlobalStyle from './global/globalStyle';
import { defaultTheme } from './global/theme';
import {ThemeProvider} from 'styled-components'
import Home from './pages/Home';
function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
     <Home />
     <GlobalStyle />
   </ThemeProvider>
  );
}

export default App;
