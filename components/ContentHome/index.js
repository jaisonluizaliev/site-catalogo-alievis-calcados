import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cards from './Cards'

const ContentHome = () => {
  return (
    <>
      <Row lg={3} xs={1} md={2}>
        <Col>
          <Cards
            src="/scarpin-vermelho-pagina.jpg"
            titulo="Scarpins"
            alt="scarpin"
            href="/scarpin"
          />
        </Col>
        <Col>
          <Cards
            src="/sandalia-home.jpg"
            titulo="Sandálias"
            alt="sandalias"
            href="/sandalias"
          />
        </Col>
        <Col>
          <Cards
            src="/tamanco-home.jpg"
            titulo="Tamancos"
            alt="tamanco"
            href="/tamanco"
          />
        </Col>
        <Col>
          <Cards
            src="/rasteira-tyedielilas-pagina.jpg"
            titulo="Rasteiras"
            alt="rasteiras"
            href="/rasteiras"
          />
        </Col>
        <Col>
          <Cards
            src="/peeptoe-preto-pagina.jpg"
            titulo="PeepToes"
            alt="peep-toe"
            href="/peeptoe"
          />
        </Col>
        <Col>
          <Cards
            src="/sapatilhas-home.jpg"
            titulo="Sapatilhas"
            alt="sapatilhas"
            href="/sapatilhas"
          />
        </Col>
        <Col>
          <Cards
            src="/mocassim-azul-pagina.jpg"
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
