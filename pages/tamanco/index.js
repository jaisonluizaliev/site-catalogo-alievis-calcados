import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardIndisponible from '../../components/CardIndisponible'

const Tamanco = () => {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardIndisponible
            src="/tamanco-home.jpg"
            alt="tamanco"
            link="https://bit.ly/38ybGTN"
          />
        </Col>
      </Row>
    </main>
  )
}

export default Tamanco;