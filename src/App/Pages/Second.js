// NPM
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

// Components
import GoBack from '../Components/GoBack';
import GoForward from '../Components/GoForward';

// Shared Styles
import Container from '../../shared/styles/Container';
import Layout from '../../shared/styles/Layout';

// Images
import timeSpace from '../../shared/images/time-space.png';

const Second = () => {
  const [show, setShow] = useState(false);

  const transitions = useTransition(show, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
  });

  setTimeout(() => {
    setShow(true);
  }, 1000);

  return (
    <Layout>
      <GoBack />
      <Container style={{ justifyContent: 'center' }}>
        <h1 style={{ alignSelf: 'flex-end' }}>🔥 WHAT IS IT GOOD FOR? 🔥</h1>
        <div style={{ paddingTop: '10rem' }}>
          {transitions.map(
            ({ item, key, props }) => item && (
            <animated.div key={key} style={props}>
              <img
                src={timeSpace}
                alt="Time & Space Complexity"
                style={{
                  height: '55%',
                  width: '55%',
                }}
              />
            </animated.div>
            ),
          )}
        </div>
      </Container>
      <GoForward />
    </Layout>
  );
};

export default Second;
