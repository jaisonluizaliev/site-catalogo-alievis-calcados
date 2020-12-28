import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'


const SectionAds = () => {
  return (
    <section>
      <Row noGutters xs={1} md={1} lg={3} className="w-100 font">
        <Col >
          <Nav className="w-100 d-flex justify-content-center align-items-baseline mt-3 mb-3">
            <Nav.Link href="https://bit.ly/3pl93fa" target="blank">
              <Image src="/icons/whatsapp-icon-section.png" alt="vendas whatsapp" width={64} height={64} />
            </Nav.Link>
            <p className='ml-1'>Vendas Pelo WhatsApp</p>
          </Nav>
        </Col>
        <Col >
          <Nav className="w-100 d-flex justify-content-center align-items-baseline mt-3 mb-3">
            <Nav.Link href="https://bit.ly/3hcP3s6" target="blank">
              <Image src="/icons/delivery-icon-section.png" alt="consulta de frete" width={64} height={64} />
            </Nav.Link>
            <p className='ml-1'>Consulte Nosso Frete</p>
          </Nav>
        </Col>
        <Col>
          <Nav className="w-100 d-flex justify-content-center align-items-baseline mt-3 mb-3">
            <div>
              <Image src="/icons/satisfaction-icon-section.png" alt="otima aprovação" width={64} height={64} />
            </div>
            <p className='ml-3'>Ótima Aprovação</p>
          </Nav>
        </Col>
      </Row>
    </section>
  )
}

export default SectionAds