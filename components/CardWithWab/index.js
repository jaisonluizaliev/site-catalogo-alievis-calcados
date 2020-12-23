import { Button, Row, Card } from 'react-bootstrap'

//const linkWhats = "https://api.whatsapp.com/send?phone=5548988467451&text=Olá%20você%20tem%20este%20calçado %20disponível%20no%20número%20"

export default function CardWithWab(props) {
  return (
    <>
      <Card className="mt-2 mb-2">
        <div className="w-100 mx-auto pb-3">
          <Card.Img src={props.src} alt={props.alt} />
        </div>
        <Card.Title className="text-center h5 font-weight-normal font-1 font-1-md font-1-lg">
          {props.titulo}
        </Card.Title>
        <Card.Body>
          <div className="lead p-0 m-0 font-2 font-2-md font-2-lg">
            <p><strong>Tamanho: </strong>{props.tamanho}</p>
            <p><strong>Material: </strong>{props.material}</p>
            <strong>Descrição: </strong><p>{props.descrição}</p>
            <p>Mais Fotos no WhatsApp.</p>
          </div>
          <Row>
            <Button className="mt-3 w-75 mx-auto btn-wp p-3 p-lg-2" variant="success"  >
              <a target="blank" href={props.link}>
                Compre Pelo WhatsApp
              </a>
            </Button>
          </Row>
        </Card.Body>
      </Card>

    </>
  )
}