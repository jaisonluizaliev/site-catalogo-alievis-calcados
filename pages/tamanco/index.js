import { Row, Col } from 'react-bootstrap'
import CardWithWab from '../../components/CardWithWab/index'

export default function Tamanco() {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/logo.png"
            alt="tamanco"
            titulo="Sapato"
            texto="Sapato descrição"
          />
        </Col>
      </Row>
    </main>
  )
}