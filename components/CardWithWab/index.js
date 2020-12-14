import { Button, Row, Card } from 'react-bootstrap'

export default function CardWithWAB(props) {
  return (
    <>
      <Card className="mt-2 mb-2">
        <div className="w-50 mx-auto pb-3">
          <Card.Img src={props.imgwb} alt={props.alt} />
        </div>
        <Card.Title className="text-center h5 font-weight-normal">
          {props.titulo}
        </Card.Title>
        <Card.Body>
          <p className="lead p-0 m-0">{props.texto}</p>
          <Row>
            <Button className="mt-3 w-75 mx-auto link-wp p-3 p-lg-2" variant="success" href="">
              Compre Pelo WhatsApp
            </Button>
          </Row>
        </Card.Body>
      </Card>

    </>
  )
}