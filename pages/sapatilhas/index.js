import { Row, Col } from 'react-bootstrap'
import CardWithWab from '../../components/CardWithWab/index'

export default function Sapatilhas() {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/sapatilhas-home.jpg"
            alt="sapatilha nude"
            titulo="Sapatilha Croco Nude"
            tamanho="36 e 37"
            material="Napa"
            descrição="Sapatilha linha Confort, salto 1cm"
            link="https://bit.ly/3h8xDgd"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sapatilha-gelo-fend.jpg"
            alt="sapatilha Gelo Fend"
            titulo="Sapatilha Fend Gelo"
            tamanho="36, 37 e 38"
            material="Napa"
            descrição="Sapatilha linha Confort, salto 1cm"
            link="https://bit.ly/2KP8VFO"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sapatilha-napa-chocolate.jpg"
            alt="sapatilha chocolate"
            titulo="Sapatilha Croco Chocolate"
            tamanho="38"
            material="Napa"
            descrição="Sapatilha linha Confort, salto 1cm"
            link="https://bit.ly/2WDolPK"
          />
        </Col>
      </Row>
    </main>
  )
}