import React from 'react';
import { Router } from '@reach/router';

import First from '../Pages/First';
import Open from '../Pages/Open';
import Second from '../Pages/Second';
import Third from '../Pages/Third';
import Fourth from '../Pages/Fourth';
import Fifth from '../Pages/Fifth';
import Sixth from '../Pages/Sixth';
import Seventh from '../Pages/Seventh';
import Eighth from '../Pages/Eighth';

const Routes = () => (
  <Router>
    <Open path="/0" default />
    <First path="/1" />
    <Second path="/2" />
    <Third path="/3" />
    <Fourth path="/4" />
    <Fifth path="/5" />
    <Sixth path="/6" />
    <Seventh path="/7" />
    <Eighth path="/8" />
  </Router>
);

export default Routes;
