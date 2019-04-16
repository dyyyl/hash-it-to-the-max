// NPM
import React from 'react';

// Components
import GoBack from '../Components/GoBack';
import GoForward from '../Components/GoForward';

// Shared Styles
import Container from '../../shared/styles/Container';
import Layout from '../../shared/styles/Layout';

import map from '../../shared/images/carbon/map.png';

const Fifth = () => (
  <Layout>
    <GoBack />
    <Container>
      <h1 style={{ alignSelf: 'flex-end', justifySelf: 'center' }}>🔥 Map Time 🔥</h1>
      <img
        src={map}
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

export default Fifth;
