import styled from 'styled-components';

export const Container = styled.div`
  nav {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
  }

  .background {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 300px;
    background: var(--white);
  }

  button {
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 235px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
  }

  li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
