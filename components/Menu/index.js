import Image from 'next/image';
import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';





const Menu = () => {
  return (
    <>
      <Navbar
        className="font"
        collapseOnSelect
        expand="lg"
        bg="trasnsparent"
        variant="light"
      >
        <Navbar.Brand href="/">
          <Image src="/logo.png" alt="logo" width={133} height={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              className="mr-3"
              title="Calçados"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/mocassim">Mocassim</NavDropdown.Item>
              <NavDropdown.Item href="/mule">Mule</NavDropdown.Item>
              <NavDropdown.Item href="/peeptoe">PeepToe</NavDropdown.Item>
              <NavDropdown.Item href="/rasteiras">Rasteiras</NavDropdown.Item>
              <NavDropdown.Item href="/sandalias">Sandálias</NavDropdown.Item>
              <NavDropdown.Item href="/sapatilhas">Sapatilhas</NavDropdown.Item>
              <NavDropdown.Item href="/scarpin">Scarpin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#d">
             
            </Nav.Link>
            <Nav.Link href="#">
             
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Menu;



