import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
    list-style:none;
  }
  a, a:hover {
      text-decoration: none;
      color: inherit;
  }


`