import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 8fr;
  grid-template-areas:
    'title'
    'content';
  height: 100%;
`;

export default Container;
