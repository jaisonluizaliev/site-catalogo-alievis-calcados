import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavDropItem from './NavDropdownItem'

const Menu = () => {
  return (
    <>
      <Navbar
        className="font menu"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand href="/">
          <Image src="/logo.png" alt="logo" width={133} height={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title="Calçados"
              id="collasible-nav-dropdown"
            >
              <NavDropItem
                href="/mocassim"
                item="Mocassim"
              />
              <NavDropItem
                href="/peeptoe"
                item="Peep Toes"
              />
              <NavDropItem
                href="/rasteira"
                item="Rasteirinhas"
              />
              <NavDropItem
                href="/sandalias"
                item="Sandálias"
              />
              <NavDropItem
                href="/sapatilhas"
                item="Sapatilhas"
              />
              <NavDropItem
                href="/scarpin"
                item="Scarpins"
              />
              <NavDropItem
                href="/tamanco"
                item="Tamancos"
              />
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/como-funciona">Duvidas</Nav.Link>
          </Nav>
          <Nav>
            
            <Nav.Link href="https://bit.ly/3aCP1bD" target="blank">
              <Image src='/icons/instagram-icon.png' alt="icone instagram" width={32} height={32} />
            </Nav.Link>
            <Nav.Link href="http://bit.ly/34Bawpy" target="blank">
              <Image src='/icons/facebook-icon.png' alt="icone facebook" width={32} height={32} />
            </Nav.Link>
            <Nav.Link href="https://bit.ly/3mHN5RD" target="blank">
              <Image src='/icons/whatsapp-icon.png' alt="icone whatsapp" width={32} height={32} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Menu;



