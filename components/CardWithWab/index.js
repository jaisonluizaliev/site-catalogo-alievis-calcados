import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'next/image';


//const linkWhats = "https://api.whatsapp.com/send?phone=5548988467451&text=Olá%20você%20tem%20este%20calçado %20disponível%20no%20número%20"

const CardWithWab = (props) => {
  return (
    <>
      <Card className="mt-2 mb-2">
        <div className="w-100 mx-auto pb-3">
          <Image
            src={props.src}
            alt={props.alt}
            width={500}
            height={500}
          />
        </div>
        <Card.Title className="text-center h5 font-weight-normal font-1">
          {props.titulo}
        </Card.Title>
        <Card.Body>
          <div className="lead p-0 m-0 font-2">
            <p><strong>Tamanho: </strong>{props.tamanho}</p>
            <p><strong>Material: </strong>{props.material}</p>
            <strong>Descrição: </strong><p>{props.descrição}</p>
            <p>Mais Fotos no WhatsApp.</p>
          </div>
          <div className="display-flex">
            <Button className="btn-wp" target="blank" href={props.link}>
              Compre Pelo WhatsApp
            </Button>
          </div>
        </Card.Body>
      </Card>

    </>
  )
}

export default CardWithWab;