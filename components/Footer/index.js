import { Navbar, Nav, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Navbar
        className="font footer-adjust-mob"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{height: '250px'}}
      >
        <Row xs={12} className="w-100 mx-auto">
          <Nav className="col-12 col-lg-6 col-md-6 text-center">
            <Row className="mx-auto">
              <Nav.Link className="col-sm" target="blank" href="https://www.facebook.com/calcadosalievis">
                Curta Nossa Página no Facebook
              </Nav.Link>
              <Nav.Link className="col-sm" target="blank" href="https://www.instagram.com/alieviscalcadosfemininos/">
                Siga-nos no Instagram
                  </Nav.Link>
              <Nav.Link className="col-sm" target="blank" href="https://bit.ly/3oNXVaa">
                Nos Chame no WhatsApp
              </Nav.Link>
            </Row>
          </Nav >
          <Nav className="col-12 col-lg-6 col-md-6 text-center">
            <Nav.Link className="mx-auto" >
              By Jaison Dev
            </Nav.Link>
          </Nav>
        </Row>

      </Navbar>
    </footer>
  )
}

export default Footer;
