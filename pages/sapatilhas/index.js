import { Row, Col } from 'react-bootstrap'
import CardWithWab from '../../components/CardWithWab/index'

export default function Sapatilhas() {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src=""
            alt=""
            titulo=""
            tamanho=""
            material=""
            descrição=""
            link=""
          />
        </Col>
      </Row>
    </main>
  )
}