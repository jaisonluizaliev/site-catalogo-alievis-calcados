import { Button, Row, Card } from 'react-bootstrap'

const linkWhats = "https://api.whatsapp.com/send?phone=5548988467451&text=Olá%20você%20tem%20este%20calçado %20disponível%20no%20número%20"

export default function CardWithWab(props) {
  return (
    <>
      <Card className="mt-2 mb-2">
        <div className="w-100 mx-auto pb-3">
          <Card.Img src={props.src} alt={props.alt} />
        </div>
        <Card.Title className="text-center h5 font-weight-normal font-1">
          {props.titulo}
        </Card.Title>
        <Card.Body>
          <p className="lead p-0 m-0 font-2">{props.texto}</p>
          <Row>
            <Button className="mt-3 w-75 mx-auto link-wp p-3 p-lg-2" variant="success" target="blank" href={linkWhats}>
              Compre Pelo WhatsApp
            </Button>
          </Row>
        </Card.Body>
      </Card>

    </>
  )
}