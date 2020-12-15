import { Row, Col } from 'react-bootstrap'
import CardWithWab from '../../components/CardWithWab/index'

export default function PeepToe() {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/peeptoe-vermelho-pagina.jpg"
            alt="tamanco"
            titulo="Peep Toe Vermelho"
            tamanho="36"
            material="Verniz"
            descrição="Lindo peeptoe, salto 4cm, linha confort premium"
            link="https://bit.ly/386r75B"
          />

          
        </Col>
        <Col>
          <CardWithWab
            src="/peeptoe-preto-pagina.jpg"
            alt="tamanco"
            titulo="Peep Toe Preto"
            tamanho="34 e 38"
            material="Verniz"
            descrição="Lindo peeptoe, salto 4cm, linha confort premium"
            link="https://bit.ly/2K6eZJT"
          />
        </Col>
      </Row>
    </main>
  )
}