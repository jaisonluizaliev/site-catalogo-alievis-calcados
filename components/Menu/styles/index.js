import styled from 'styled-components'

export const BurguerStyle = styled.div`
  display:none;
  @media (max-width:999px) {
    width:2rem;
    height:2rem;
    display:flex;
    justify-content:space-around;
    flex-flow:column nowrap;
    
    
    

    div {
      width:2rem;
      height:0.25rem;
      background-color:${({ open }) => open ? '#ccc' : '#333'};
      border-radius:10px;
      transform-origin:1px;
      transition: all 0.2s linear;

      &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'}; 
      }
       &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'} ;
        opacity: ${({ open }) => open ? 0 : 1};
      }
       &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'} ;
      }

    }
  }

`

export const Logo = styled.div`

`

export const MenuStyle = styled.nav`
  display:flex;
`