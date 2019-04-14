// NPM
import React from 'react';

// Components
import GoBack from '../Components/GoBack';
import GoForward from '../Components/GoForward';

// Shared Styles
import Layout from '../../shared/styles/Layout';

const Third = () => (
  <Layout>
    <GoBack />
    <h1 style={{ alignSelf: 'center', justifySelf: 'center' }}>🔥 THIRD PAGE WHAT UP 🔥</h1>
    <GoForward />
  </Layout>
);

export default Third;
