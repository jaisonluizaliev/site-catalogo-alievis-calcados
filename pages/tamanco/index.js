import { Row, Col } from 'react-bootstrap'
import CardWithWab from '../../components/CardWithWab/index'

export default function Tamanco() {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/tamanco-home.jpg"
            alt="tamanco"
            titulo="Lindo Tamanco Black/Rose"
            tamanho="38 e 39 "
            material="Verniz"
            descrição="Tamanco Confort Premium, Salto 4cm"
            link="https://bit.ly/34eLuMU"
          />
        </Col>
      </Row>
    </main>
  )
}