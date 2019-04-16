// NPM
import React from 'react';

// Components
import GoBack from '../Components/GoBack';
import GoForward from '../Components/GoForward';

// Shared Styles
import Container from '../../shared/styles/Container';
import Layout from '../../shared/styles/Layout';

import hashmap from '../../shared/images/carbon/hashmap.png';

const Sixth = () => (
  <Layout>
    <GoBack />
    <Container>
      <h1 style={{ alignSelf: 'flex-end', justifySelf: 'center' }}>🔥 Hash It 🔥</h1>
      <img
        src={hashmap}
        style={{
          height: '65rem',
          width: '75rem',
          justifySelf: 'center',
          marginTop: '5rem',
        }}
        alt="hashmap entry"
      />
    </Container>
    <GoForward />
  </Layout>
);

export default Sixth;
