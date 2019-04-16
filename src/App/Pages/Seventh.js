// NPM
import React from 'react';

// Components
import GoBack from '../Components/GoBack';
import GoForward from '../Components/GoForward';

// Shared Styles
import Container from '../../shared/styles/Container';
import Layout from '../../shared/styles/Layout';

import collision from '../../shared/images/collision.png';

const Seventh = () => (
  <Layout>
    <GoBack />
    <Container>
      <h1 style={{ alignSelf: 'flex-end', justifySelf: 'center' }}>🔥 Ruh ro raggy 🔥</h1>
      <img
        src={collision}
        style={{
          height: '55rem',
          width: '85rem',
          justifySelf: 'center',
          marginTop: '5rem',
        }}
        alt="hashmap entry"
      />
    </Container>
    <GoForward />
  </Layout>
);

export default Seventh;
