// NPM
import React from 'react';

// Shared
import RouteContextProvider from '../shared/contexts/RouteContext';
import GlobalStyle from '../shared/styles/GlobalStyle';

// Routes
import Routes from './Routes';

const App = () => (
  <RouteContextProvider>
    <Routes />
    <GlobalStyle />
  </RouteContextProvider>
);

export default App;
