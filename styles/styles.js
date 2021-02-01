import styled, { createGlobalStyle } from 'styled-components'

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

export const Container = styled.div`
  width:99%;
  margin:auto;
  @media screen and (min-width:768px) {
    width:100%;
    
  }

  @media screen and (min-width:1100px) {
    width:98%;
    
  }
`

export const Burguer = styled.div`
  display: none;
  @media(max-width: 999px) {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space - around;
    flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;

    &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    }

  }
  `