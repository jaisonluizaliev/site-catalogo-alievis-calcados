import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardWithWab from '../../components/CardWithWab'

const Tamanco = () => {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/tamanco-home.jpg"
            alt="tamanco"
            titulo="ESGOTADO Somente Sob Encomenda"
            tamanho="0"
            material="Verniz"
            descrição="Tamanco Confort Premium, Salto 4cm"
            link="https://bit.ly/38ybGTN"
          />
        </Col>
      </Row>
    </main>
  )
}

export default Tamanco;