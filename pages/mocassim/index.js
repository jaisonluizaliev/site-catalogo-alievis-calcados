import { Row, Col } from 'react-bootstrap'
import CardWithWab from '../../components/CardWithWab'

export default function Mocassim() {
  return (
    <>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            imgwb="/logo.png"
            titulo="Ola"
            alt="imagem calçado"
            texto="Um lindo e confortável calçado!"
            
          />
        </Col>
      </Row>
    </>
  )
}


