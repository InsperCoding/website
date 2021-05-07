import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 80px);

  scroll-snap-align: start;
  
  scroll-snap-type: y mandatory;
  overflow-y: scroll;


  @media(max-width: 750px){
    justify-content: center;
    max-width: 330px;
    flex-direction: column;
  }
`;
