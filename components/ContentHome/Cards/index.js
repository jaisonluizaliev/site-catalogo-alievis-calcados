import { Row, Card, Button } from 'react-bootstrap'


export default function Cards(props) {
  return (
    <>
      <Card className="mt-2 mb-2">
        <div className="w-100 mx-auto pb-3">
          <Card.Img src={props.image} alt={props.alt} />
        </div>
        <Card.Title className="text-center h5 font-weight-normal font-1">
          {props.titulo}
        </Card.Title>
        <Card.Link>
         <Row>
            <Button className="mt-3 w-75 mx-auto mb-3 p-3 p-lg-2 link-btn-home " href={props.href}>
              Mais Detalhes
            </Button>
          </Row>
        </Card.Link>
      </Card>
    </>
  )
}
