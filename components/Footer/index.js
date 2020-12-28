import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Image from 'next/image'
import Col from 'react-bootstrap/Col'


const Footer = () => {
  return (
    <footer >
      <Navbar
        bg="dark"
        variant="dark"
        style={{ height: '35vh' }}
      >
        <Row xs={1} md={2} lg={4} className="w-100 font-2">
          <Col >
            <Nav className="w-100 d-flex justify-content-center align-items-baseline">
              <Nav.Link target="blank" href="http://bit.ly/34Bawpy">
                <Image src="/icons/facebook-footer-icon.png" alt="icone facebook" width={32} height={32} />
              </Nav.Link>
              <p className="text-white">Curta Nossa Página</p>
            </Nav>
          </Col>
          <Col>
            <Nav className="w-100 d-flex justify-content-center align-items-baseline ">
              <Nav.Link target="blank" href="https://bit.ly/3aCP1bD">
                <Image src="/icons/instagram-footer-icon.png" alt="icone instagram" width={32} height={32} /> 
              </Nav.Link>
              <p className="text-white">Siga-nos</p>
            </Nav>
          </Col>
          <Col>
            <Nav className="w-100 d-flex justify-content-center align-items-baseline ">
              <Nav.Link target="blank" href="https://bit.ly/3oNXVaa">
                <Image src="/icons/whatsapp-footer-icon.png" alt="icone whatsapp" width={32} height={32} /> 
              </Nav.Link>
              <p className="text-white">WhatsApp</p>
            </Nav>
          </Col>
          <Col>
            <Nav className="w-100 d-flex  ">
              <Nav.Link href="https://bit.ly/2WK5PoU" target="blank" className="d-flex w-100 justify-content-center" >
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
