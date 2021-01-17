import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardWithWab from '../../components/CardWithWab'

const Sapatilhas = () => {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/sapatilhas-home.jpg"
            alt="sapatilha nude"
            price="21,18"
            atSight="63,54"
            off="54,00"
            off1="44,47"
            titulo="Sapatilha Croco Nude"
            setSize36="ative"
            setSize37="ative"
            material="Napa"
            descrição="Sapatilha linha Confort, salto 1cm"
            link="https://bit.ly/3h8xDgd"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sapatilha-gelo-fend.jpg"
            alt="sapatilha Gelo Fend"
            price="21,18"
            atSight="63,54"
            off="54,00"
            off1="44,47"
            titulo="Sapatilha Fend Gelo"
            setSize36="ative"
            setSize37="ative"
            setSize38="ative"
            material="Napa"
            descrição="Sapatilha linha Confort, salto 1cm"
            link="https://bit.ly/2KP8VFO"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sapatilha-napa-chocolate.jpg"
            alt="sapatilha chocolate"
            price="21,18"
            atSight="63,54"
            off="54,00"
            off1="44,47"
            titulo="Sapatilha Croco Chocolate"
            setSize38="ative"
            material="Napa"
            descrição="Sapatilha linha Confort, salto 1cm"
            link="https://bit.ly/2WDolPK"
          />
        </Col>
      </Row>
    </main>
  )
}

export default Sapatilhas;