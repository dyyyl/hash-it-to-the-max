import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const RouteContext = React.createContext();

const RouteContextProvider = ({ children }) => {
  const [route, setRoute] = useState(0);
  return <RouteContext.Provider value={{ route, setRoute }}>{children}</RouteContext.Provider>;
};

RouteContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default RouteContextProvider;
