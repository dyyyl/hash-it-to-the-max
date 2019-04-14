// NPM
import React from 'react';

// Components
import GoBack from '../Components/GoBack';
import GoForward from '../Components/GoForward';

// Shared Styles
import Layout from '../../shared/styles/Layout';

const Open = () => (
  <Layout>
    <GoBack />
    <h1 style={{ alignSelf: 'center', justifySelf: 'center' }}>
      HELLO WORLD THIS IS MY COOL WEB SITE FOR PRESENTING ABOUT HASHMAPS
    </h1>
    <GoForward />
  </Layout>
);

export default Open;
