import {Card} from 'react-bootstrap'


export default function Cards(props) {
  return (
    <>
     <Card className="mt-2 mb-2">
      <div className="w-50 mx-auto">
        <Card.Img src={props.image} alt={props.alt}/>
      </div>
      <Card.Title className="text-center h5">
        {props.titulo}
      </Card.Title>
      <Card.Body>
        <p className="lead">{props.texto}</p>
      </Card.Body>
     </Card>
    </>
  )
}
