// NPM
import React from 'react';

// Components
import GoBack from '../Components/GoBack';
import GoForward from '../Components/GoForward';

// Shared Styles
import Container from '../../shared/styles/Container';
import Layout from '../../shared/styles/Layout';

import entries from '../../shared/images/entries.png';

const First = () => (
  <Layout>
    <GoBack />
    <Container>
      <h1 style={{ alignSelf: 'flex-end', justifySelf: 'center' }}>🔥 Enter, entries 🔥</h1>
      <img
        src={entries}
        style={{
          height: '55rem',
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

export default First;
