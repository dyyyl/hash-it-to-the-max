import { Link } from '@reach/router';
import React, { useContext } from 'react';

import { RouteContext } from '../../../shared/contexts/RouteContext';
import Navigation from '../../../shared/styles/Navigation';

const GoBack = () => {
  const { route, setRoute } = useContext(RouteContext);

  return route !== 0 ? (
    <Link to={`/${(route - 1).toString()}`}>
      <Navigation role="img" aria-label="go back" onClick={() => setRoute(route - 1)}>
        {/* eslint-disable-next-line */}
        👈🏽
      </Navigation>
    </Link>
  ) : (
    <>
      {/* eslint-disable-next-line */}
      <Navigation role="img" aria-label="nothing here">
        🙅🏽‍♂️
      </Navigation>
    </>
  );
};

export default GoBack;
