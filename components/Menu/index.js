import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';

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
              <NavDropdown.Item className="p-3 p-lg-2 text-center" href="/mocassim">Mocassins</NavDropdown.Item>
              <NavDropdown.Item className="p-3 p-lg-2 text-center" href="/peeptoe">PeepToes</NavDropdown.Item>
              <NavDropdown.Item className="p-3 p-lg-2 text-center" href="/rasteiras">Rasteiras</NavDropdown.Item>
              <NavDropdown.Item className="p-3 p-lg-2 text-center" href="/sandalias">Sandálias</NavDropdown.Item>
              <NavDropdown.Item className="p-3 p-lg-2 text-center" href="/sapatilhas">Sapatilhas</NavDropdown.Item>
              <NavDropdown.Item className="p-3 p-lg-2 text-center" href="/scarpin">Scarpins</NavDropdown.Item>
              <NavDropdown.Item className="p-3 p-lg-2 text-center" href="/tamanco">Tamancos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link className="text-darker" href="/">Home</Nav.Link>
            <Nav.Link className="text-darker" href="/como-funciona">Duvidas</Nav.Link>
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



