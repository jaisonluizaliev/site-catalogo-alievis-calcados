import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Image from 'next/image'
import Image from '../Image/index'


const SectionAds = () => {
  return (
    <section>
      <Row noGutters className="font display-section-ads">
        <Nav className="padding-ads">
            <a href="https://bit.ly/3pl93fa" target="blank">
              <Image src="/icons/whatsapp-icon-section.png" alt="vendas whatsapp" width={64} height={64} />
            </a>
            <p>Vendas Pelo WhatsApp</p>
          </Nav>
          <Nav className="padding-ads">
            <a href="/como-funciona" target="blank">
              <Image src="/icons/forma-de-pagamento.png" alt="formas pagamento" width={64} height={64} />
            </a>
            <p>Aceitamos Cartões</p>
          </Nav>
          <Nav className="padding-ads">
            <div>
              <Image src="/icons/satisfaction-icon-section.png" alt="otima aprovação" width={64} height={64} />
            </div>
            <p>Ótima Aprovação</p>
          </Nav>
        
      </Row>
    </section>
  )
}

export default SectionAds