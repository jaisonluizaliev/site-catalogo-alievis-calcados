import { Navbar, Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Navbar 
        className="font"
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="light"
        style={{height: '150px'}}
        >
        <Nav className="mx-auto" >
          <Nav.Link href="#d">
            Facebook
            </Nav.Link>
          <Nav.Link href="#">
            Instagram
            </Nav.Link>
          <Nav.Link href="#">
            WhatsApp
            </Nav.Link>
        </Nav >
        <Nav className="mx-auto">
          <Nav.Link>
            Feito por Jaison Dev
          </Nav.Link>
        </Nav>

      </Navbar>
    </footer>
  )
}

export default Footer;
