import { Row, Col } from 'react-bootstrap'
import CardWithWab from '../../components/CardWithWab/index'

export default function PeepToe() {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/tamanco-home.jpg"
            alt="tamanco"
            titulo="Sapato"
            texto="Sapato descrição"
          />
        </Col>
      </Row>
    </main>
  )
}