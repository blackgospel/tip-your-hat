import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  html,
  body {
    font-family: DM Sans, sans-serif;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiasedi;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    color: #8493a5;
    background-color: #f9fafc;
  }
  
  #root {
    min-height: 100vh;
  }

  /* a {
    text-decoration: none;
    outline: 0;
  }

  ul {
    list-style: none;
  }

  img {
    width: 100%;
  }

  button {
    padding: 0;
    color: inherit;
    background-color: transparent;
    border-width: 0;
    outline: none;
    font: unset;
  }

  figure {
    margin: 0;
  }

  input::-moz-focus-inner {
    margin: 0;
    padding: 0;
    border: 0;
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
    font-weight: 600;
  }
  
  p {
    margin: 0;
  } */
`

export default GlobalStyle
