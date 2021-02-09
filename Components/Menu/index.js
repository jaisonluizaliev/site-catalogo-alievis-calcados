import { useState } from 'react'
import { Nav, Logo, Burguer, DropDown } from '../../styles'



export default function Menu() {
  const [open, setOpen] = useState(false)


  return (
    <Nav>
      <Logo>
        <a href="/">
          <img src="/images/logo.png" alt="Logo Site" width={130} height={69} />
        </a>
      </Logo>
      <DropDown open={open} onClick={() => { setOpen(!open) }}>
        <ul>
          <li className="child-1">
            Calçados<img src="icons/seta-suspensa.svg" alt="Setinha" width={13} height={12} />
            <ul >
              <li>Mocassim</li>
              <li>PeepToe</li>
              <li>Rasteirinhas</li>
              <li>Scarpins</li>
              <li>Sandálias</li>
              <li>Sapatilhas</li>
              <li>Tamancos</li>
            </ul>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Duvidas</a>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <a href="">
              <img src="/icons/facebook-icon.png" alt="Icone Facebook" width={33} height={33} />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/icons/instagram-icon.png" alt="Icone Instagram" width={33} height={33} />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/icons/whatsapp-icon.png" alt="Icone Whats App" width={33} height={33} />
            </a>
          </li>
        </ul>
      </DropDown>
      <Burguer open={open} onClick={() => { setOpen(!open) }}>
        <div />
        <div />
        <div />
      </Burguer>
    </Nav >
  )
}

