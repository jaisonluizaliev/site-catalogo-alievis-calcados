import { Navbar, Nav, Row, Image, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Navbar
        bg="dark"
        variant="dark"
      >
        <Row xs={1} md={2} lg={4} className="w-100 font-2">
          <Col >
            <Nav className="w-100 d-flex justify-content-center ">
              <Nav.Link target="blank" href="http://bit.ly/34Bawpy">
                <Image src="/icons/facebook-footer-icon.png" /> Curta Nossa Página
              </Nav.Link>
            </Nav>
          </Col>
          <Col>
            <Nav className="w-100 d-flex justify-content-center ">
              <Nav.Link target="blank" href="https://bit.ly/3aCP1bD">
                <Image src="/icons/instagram-footer-icon.png" /> Siga Nos
              </Nav.Link>
            </Nav>
          </Col>
          <Col>
            <Nav className="w-100 d-flex justify-content-center ">
              <Nav.Link target="blank" href="https://bit.ly/3oNXVaa">
                <Image src="/icons/whatsapp-footer-icon.png" /> WhatsApp
              </Nav.Link>
            </Nav>
          </Col>
          <Col>
            <Nav className="w-100 d-flex justify-content-center ">
              <Nav.Link href="#" className="" >
                By Jaison Dev
              </Nav.Link>
            </Nav>
          </Col>
          
          
          
        </Row>
      </Navbar>
    </footer>
  )
}

export default Footer;
