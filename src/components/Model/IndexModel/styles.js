import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 80px);

  scroll-snap-align: start;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Text = styled.div`
  max-width: 500px;
  p{
    font-size: 20px;
    color: var(--text100);
  }
`;

export const Title = styled.h1`
  color: var(--pink500);
  font-size: 50px;
`
