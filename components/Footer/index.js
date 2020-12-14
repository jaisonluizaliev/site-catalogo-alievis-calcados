import { Navbar, Nav, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Navbar
        className="font-1"
        collapseOnSelect
        expand="lg"
        bg="secondary"
        variant="dark"
        style={{ height: '200px' }}
      >
        <Row xs={12} className="w-100 mx-auto">
          <Nav className="col-12 col-lg-6 col-md-6 text-center">
            <Row className="mx-auto">
              <Nav.Link className="col-sm" href="#d">
                Facebook
                  </Nav.Link>
              <Nav.Link className="col-sm" href="#">
                Instagram
                  </Nav.Link>
              <Nav.Link className="col-sm" href="#">
                WhatsApp
                </Nav.Link>
            </Row>
          </Nav >
          <Nav className="col-12 col-lg-6 col-md-6 text-center">
            <Nav.Link className="mx-auto" >
              Feito por Jaison Dev
            </Nav.Link>
          </Nav>
        </Row>

      </Navbar>
    </footer>
  )
}

export default Footer;
