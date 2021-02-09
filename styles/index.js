import styled, { createGlobalStyle } from 'styled-components'


// font - family: 'Open Sans Condensed', sans - serif 300 300i 700;;
// font - family: 'Playfair Display', serif;
// font - family: 'Open Sans', sans - serif;
// font - family: 'Playfair Display SC', serif  


const media = {
  smartphones: " @media screen and (max-width: 599px)",
  smAndMd: " @media screen and (max-width:999px)",
  tablets: "@media screen and (min-width:600px) and (max-width:999px)",
  laptops: "@media screen and (min-width:1000px)"
}

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
  /* font-family: 'Open Sans Condensed', sans serif,'Playfair Display', serif,'Open Sans', sans-serif; */


`

export const Container = styled.div`
  width:99%;
  margin:auto;
  ${media.tablets} {
    width:100%;
    
  }

  ${media.laptops} {
    width:98%;
    
  }
`

export const Burguer = styled.div`
  display: none;
  ${media.smAndMd} {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
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
}`

export const Logo = styled.div`
  ${media.tablets} {
    img {
      width: 130px; height:79px;
    }
  }
  ${media.laptops} {
    img {
      width:130px; height:75px;
    }
  }
`

export const Nav = styled.nav`
  ${media.smartphones} {
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 0 15px;
  }

  ${media.tablets} {
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 0 25px;
    
  }
  ${media.laptops} {
    height: 95px;
    background-color:#fafafa;
    display:flex;
    align-items:center;
    padding:0 15px;
    justify-content:space-between;
  }
`

export const DropDown = styled.div`
  font-family:'Playfair Display', serif;
  ${media.smAndMd}
  {
    margin:auto;
    width:100vw;
    font-size:18px;
    position:absolute;
    top:80px;
    display: ${({ open }) => open ? 'flex' : 'none'};
    flex-flow:column nowrap;
    ul {
      margin:15px 10px;
      
    }

    .icons {
      display:flex;
      justify-content:space-evenly;
      li {
        margin-top:15px ;
      }
    }
    ul li ul {
      display:none;
    }
    
  }
  
  ${media.laptops}
  {
    width:50%;
    display:flex;
    justify-content:space-between;

    
    ul {
      display:flex;
      font-size:20px;
      font-weight:500;

      
      li {
        margin:0 15px;
      }
      li a:hover, li:hover {
        color:#EF5A66;
      }
      .child-1{
        position:absolute;
        top:28px;
        left:202px;
        ul {
          display:flex; 
          flex-flow:column nowrap;
          position:relative;
          top:6px;
          opacity:0;
          li {
            margin:5px 15px;
            font-size:16px;
          }
        }
      }

      
     
    }
  }

`