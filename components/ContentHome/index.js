import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cards from './Cards'

const ContentHome = () => {
  return (
    <>
      <Row lg={3} xs={1} md={2}>
        <Col>
          <Cards
            src="/images/scarpin-vermelho-pagina.jpg"
            titulo="Scarpins"
            alt="scarpin"
            href="/scarpin"
          />
        </Col>
        <Col>
          <Cards
            src="/images/sandalia-offwhitecobra-pagina.jpg"
            titulo="Sandálias"
            alt="sandalias"
            href="/sandalias"
          />
        </Col>
        <Col>
          <Cards
            src="/images/tamanco-home.jpg"
            titulo="Tamancos"
            alt="tamanco"
            href="/tamanco"
          />
        </Col>
        <Col>
          <Cards
            src="/images/rasteira-tyedielilas-pagina.jpg"
            titulo="Rasteiras"
            alt="rasteiras"
            href="/rasteiras"
          />
        </Col>
        <Col>
          <Cards
            src="/images/peeptoe-vermelho-pagina.jpg"
            titulo="PeepToes"
            alt="peep-toe"
            href="/peeptoe"
          />
        </Col>
        <Col>
          <Cards
            src="/images/sapatilha-gelo-fend.jpg"
            titulo="Sapatilhas"
            alt="sapatilhas"
            href="/sapatilhas"
          />
        </Col>
        <Col>
          <Cards
            src="/images/mocassim-azul-pagina.jpg"
            titulo="Mocassins"
            alt="mocassim"
            href="/mocassim"
          />
        </Col>
        
      </Row>
    </>
  )
}

export default ContentHome
