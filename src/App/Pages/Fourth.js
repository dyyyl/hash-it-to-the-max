// NPM
import React from 'react';

// Components
import GoBack from '../Components/GoBack';
import GoForward from '../Components/GoForward';

// Shared Styles
import Container from '../../shared/styles/Container';
import Layout from '../../shared/styles/Layout';

import tests from '../../shared/images/carbon/tests.png';

const Fourth = () => (
  <Layout>
    <GoBack />
    <Container>
      <h1 style={{ alignSelf: 'flex-end', justifySelf: 'center' }}>🔥 Getting testy 🔥</h1>
      <img
        src={tests}
        style={{
          height: '65rem',
          width: '60rem',
          justifySelf: 'center',
          marginTop: '5rem',
        }}
        alt="hashmap entry"
      />
    </Container>
    <GoForward />
  </Layout>
);

export default Fourth;
