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
              <NavDropdown.Item href="/mocassim">Mocassins</NavDropdown.Item>
              <NavDropdown.Item href="/peeptoe">PeepToes</NavDropdown.Item>
              <NavDropdown.Item href="/rasteiras">Rasteiras</NavDropdown.Item>
              <NavDropdown.Item href="/sandalias">Sandálias</NavDropdown.Item>
              <NavDropdown.Item href="/sapatilhas">Sapatilhas</NavDropdown.Item>
              <NavDropdown.Item href="/scarpin">Scarpins</NavDropdown.Item>
              <NavDropdown.Item href="/tamanco">Tamancos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link className="text-darker" href="/">Home</Nav.Link>
            <Nav.Link className="text-darker" href="/sobre">Sobre</Nav.Link>
            <Nav.Link className="text-darker" href="/contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Menu;



