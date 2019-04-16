import { Link } from '@reach/router';
import React, { useContext } from 'react';

import { RouteContext } from '../../../shared/contexts/RouteContext';
import Navigation from '../../../shared/styles/Navigation';

const GoForward = () => {
  const { route, setRoute } = useContext(RouteContext);
  return route === 8 ? (
    <>
      {/* eslint-disable-next-line */}
      <Navigation role="img" aria-label="go home, it's over">
        🛑
      </Navigation>
    </>
  ) : (
    <>
      <Link to={`/${(route + 1).toString()}`}>
        <Navigation role="img" aria-label="go forward" onClick={() => setRoute(route + 1)}>
          {/* eslint-disable-next-line */}
          👉🏽
        </Navigation>
      </Link>
    </>
  );
};

export default GoForward;
