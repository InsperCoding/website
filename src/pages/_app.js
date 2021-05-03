import { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'

const GlobalStyle = createGlobalStyle`
  :root{
    --text50: #F7FAFC;
    --text100: #EDF2F7;
    --white: #FFFFFF;

    --background: #2D3748;
    
    --pink500: #D53F8C;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--background);
  }

  *, input, button{
    font-family: "Roboto", sans-serif;
  }
`
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
