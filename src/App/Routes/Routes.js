import React from 'react';
import { Router } from '@reach/router';

import First from '../Pages/First';
import Open from '../Pages/Open';
import Second from '../Pages/Second';
import Third from '../Pages/Third';

const Routes = () => (
  <Router>
    <Open path="/0" default />
    <First path="/1" />
    <Second path="/2" />
    <Third path="/3" />
  </Router>
);

export default Routes;
