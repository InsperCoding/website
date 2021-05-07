import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 80px);

  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;
