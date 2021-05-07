import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 80px);

  scroll-snap-align: start;

  display: flex;
  align-items: center;
  justify-content: space-around;

  video{
    max-width: 300px;
    height: auto;
    background: var(--background);
    border-radius: 8px;
  }

  @media(max-width: 750px){
    max-width: 330px;
    justify-content: center;
    flex-direction: column;
  }
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
