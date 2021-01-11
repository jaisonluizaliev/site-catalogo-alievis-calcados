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
            price="28,25"
            atSight="84,75"
            off="72,03"
            titulo="Peep Toe Vermelho"
            setSize36="ative"
            material="Verniz"
            descrição="Lindo peeptoe, salto 4cm, linha confort premium"
            link="https://bit.ly/386r75B"
          />

          
        </Col>
        <Col>
          <CardWithWab
            src="/peeptoe-preto-pagina.jpg"
            alt="tamanco"
            price="26,83"
            atsight="80,49"
            off="68,41"
            titulo="Peep Toe Preto"
            setSize34="ative"
            setSize38="ative"
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