import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardIndisponible from '../../components/CardIndisponible'

const Tamanco = () => {
  return (
    <main>
      <Row lg={5} xs={1} md={2}>
        <Col>
          <CardIndisponible
            src="/images/tamanco-home.jpg"
            alt="tamanco"
            link="https://bit.ly/38ybGTN"
          />
        </Col>
        <Col>
          <CardIndisponible
            src="/images/images/tamanco-rose-com-preto.jpg"
            alt="tamanco"
            link=""
          />
        </Col>
        <Col>
          <CardIndisponible
            src="/images/images/tamanco-white.jpg"
            alt="tamanco"
            link="/"
          />
        </Col>
      </Row>
    </main>
  )
}

export default Tamanco;