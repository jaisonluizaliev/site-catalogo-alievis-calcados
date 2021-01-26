
import styled from 'styled-components'
import Hamburguer from './Hamburguer'
import {useState} from 'react'

const Nav = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
  
  .logo {
    margin-left: 10px;
  }


  @media (min-width: 1000px) {
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-family:sans-serif;
    background-color:#FAFAFA;
  .logo {
    margin-left:18px;
  }

  ul {
    display:flex;
    list-style:none;
  }


    ul li ,li a {
      margin:0 10px 0 10px;
      font-size:1.4rem;
      font-family: 'Playfair Display', serif;
      text-decoration:none;
      color:#000;
      &:hover {
        color:#F70A1E;
      }
    }

  ul li img {
    padding-left:2px;
  }

  div a {
    margin:0 3px 0 5px;
  }
  div a img:last-child {
    margin-right:18px;
    }
  }

`



const Menu = () => {
  const [] = useState()



  return (
    <>
      <Nav>
        <div>
          <a href="/">
            <img className="logo" src="/images/logo.png" alt="Logo" width={135} height={75} />
          </a>
        </div>
        <ul>
          <li>
            Calçados<img src="/icons/seta-suspensa.svg" alt="seta suspensa" width={12} height={12}/>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Duvidas</a>
          </li>
        </ul>
        <div>
          <a href="">
            <img src="/icons/facebook-icon.png" alt="facebook icone" width={33} height={33} />
          </a>
          <a href="">
            <img src="/icons/instagram-icon.png" alt="instagram icone" width={33} height={33} />
          </a>
          <a href="">
            <img src="/icons/whatsapp-icon.png" alt="whatsapp icone" width={33} height={33} />
          </a>
        </div>
        <Hamburguer />
      </Nav>        
    </>
  )
}

export default Menu
