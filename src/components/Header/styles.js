import styled from 'styled-components';

export const Container = styled.div`
  z-index: 0;
  margin: 0 auto;
  width: 80%;
  max-width: 1440px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;


  @media(max-width: 500px){
    max-width: 330px;
  }
`;

export const Logo = styled.a`
  font-size: 36px;
  font-weight: bold;
  color: var(--white);
  margin-left: 30px;
  width: 64px;

  span{
    color: var(--pink500);
    margin-left: 4px;
  }
`;

export const MiddleContent = styled.div`
  color: var(--white);
`;

export const Burguer = styled.div`
  color: var(--white);
  margin-right: 30px;
`;

export const Break = styled.div`
  height: 1px;
  width: 80%;
  margin: 0 auto;
  background: var(--text100);
`
