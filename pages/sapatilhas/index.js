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
            price="17,67"
            atSight="49,90"
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
            price="17,67"
            atSight="49,90"
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
            price="17,67"
            atSight="49,90"
            off="54,00"
            off1="44,47"
            titulo="Sapatilha Croco Chocolate"
            setSize38="ative"
            material="Napa"
            descrição="Sapatilha linha Confort, salto 1cm"
            link="https://bit.ly/2WDolPK"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/rasteira-salome.jpg"
            alt="rasteira salome"
            price="17,67"
            atSight="49,90"
            off="27,05"
            off1="22,28"
            titulo="Sapatilha Salome"
            setSize40="ative"
            material="verniz sintético"
            descrição="Sapatilha salome na cor bic, taloneira na cor caramelo e sola emborrachada na cor natural com saltinho de 1cm."
            link="https://bit.ly/3a4afyA"
          />
        </Col>
      </Row>
    </main>
  )
}

export default Sapatilhas;