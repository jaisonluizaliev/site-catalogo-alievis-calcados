import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardWithWab from '../../components/CardWithWab'

const PeepToe = () => {
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

export default PeepToe;