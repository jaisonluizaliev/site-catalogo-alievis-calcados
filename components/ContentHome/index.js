import {Row, Col} from 'react-bootstrap'
import Cards from './Cards'

const ContentHome = () => {
  return (
    <>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <Cards
            image="/logo.png"
            titulo="Ola"
            alt="imagem calçado"
            texto="Um lindo e confortável calçado!"
            />
        </Col>
        <Col>
          <Cards
            image="/logo.png"
            titulo="Ola"
            alt="imagem calçado"
            texto="Um lindo e confortável calçado!"
          />
        </Col>
        <Col>
          <Cards
            image="/logo.png"
            titulo="Ola"
            alt="imagem calçado"
            texto="Um lindo e confortável calçado!"
          />
        </Col>
        <Col>
          <Cards
            image="/logo.png"
            titulo="Ola"
            alt="imagem calçado"
            texto="Um lindo e confortável calçado!"
          />
        </Col>
      </Row>
    </>
  )
}

export default ContentHome
