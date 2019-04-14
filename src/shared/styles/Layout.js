import styled from 'styled-components';

const Layout = styled.main`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-areas: 'left content right';
  height: 100vh;
`;

export default Layout;
