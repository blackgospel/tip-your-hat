import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  html,
  body {
    font-family: Product Sans, sans-serif;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
  
  #root {
    min-height: 100vh;
  }
  
  ul,
  ol,
  dd {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
`

export default GlobalStyle
