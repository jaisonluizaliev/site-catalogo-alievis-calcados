import Card from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'
import Image from 'next/image';


const Cards = (props) => {
  return (
    <>
      <Card className="mt-2 mb-2">
        <div className="w-75 mx-auto pb-3">
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
        <div className="display-flex">
          <Button className="link-btn-home" href={props.href}>
              Mais Detalhes
          </Button>
        </div>
      </Card>
    </>
  )
}


export default Cards;
