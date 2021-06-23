import styled from 'styled-components';

export const Container = styled.div``;

export const ModelsWrapper = styled.div`
  height: 100vh;
  
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  
  section{
    height: 100vh;

    scroll-snap-align: start;
  }

  @media(max-width: 750px){
    justify-content: center;
    max-width: 330px;
    flex-direction: column;
  }
`;
