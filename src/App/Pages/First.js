// NPM
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

// Components
import GoBack from '../Components/GoBack';
import GoForward from '../Components/GoForward';

// Shared Styles
import Container from '../../shared/styles/Container';
import Layout from '../../shared/styles/Layout';

const First = () => {
  const [show, setShow] = useState(false);

  const transitions = useTransition(show, null, {
    from: { position: 'relative', opacity: 0 },
    enter: { opacity: 1 },
  });

  setTimeout(() => {
    setShow(true);
  }, 2000);

  return (
    <Layout>
      <GoBack />
      <Container style={{ justifyContent: 'center' }}>
        <h1 style={{ alignSelf: 'flex-end' }}>🔥 WHAT IS A HASHMAP? 🔥</h1>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {transitions.map(
            ({ item, key, props }) => item && (
            <animated.div key={key} style={props}>
              <div style={{ fontSize: '25rem', marginBottom: '25rem' }}>{'{ }'}</div>
            </animated.div>
            ),
          )}
        </div>
      </Container>
      <GoForward />
    </Layout>
  );
};

export default First;
