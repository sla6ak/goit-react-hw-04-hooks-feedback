import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';
import '../node_modules/modern-normalize/modern-normalize.css';
import { GlobalStyle } from './GlobalStyle.styled';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
