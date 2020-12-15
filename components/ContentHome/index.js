import {Row, Col} from 'react-bootstrap'
import Cards from './Cards'

const ContentHome = () => {
  return (
    <>
      <Row lg={3} xs={1} md={2}>
        <Col>
          <Cards
            image="/tamanco-home.jpg"
            titulo="Tamancos"
            alt="tamanco"
            href="/tamanco"
          />
        </Col>
        <Col>
          <Cards
            image="/scarpin-home.jpg"
            titulo="Scarpins"
            alt="scarpin"
            href="/scarpin"
          />
        </Col>
        <Col>
          <Cards
            image="/sandalia-home.jpg"
            titulo="Sandálias"
            alt="sandalias"
            href="/sandalias"
          />
        </Col>
        <Col>
          <Cards
            image="/rasteira-home.jpg"
            titulo="Rasteiras"
            alt="rasteiras"
            href="/rasteiras"
          />
        </Col>
        <Col>
          <Cards
            image="/peeptoe-home.jpg"
            titulo="PeepToes"
            alt="peep-toe"
            href="/peeptoe"
          />
        </Col>
        <Col>
          <Cards
            image="/sapatilhas-home.jpg"
            titulo="Sapatilhas"
            alt="sapatilhas"
            href="/sapatilhas"
          />
        </Col>
        <Col>
          <Cards
            image="/mocassim-home.jpg"
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
