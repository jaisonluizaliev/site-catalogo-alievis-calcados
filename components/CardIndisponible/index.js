import Card from 'react-bootstrap/Card';
import Image from 'next/image'
const CardIndisponible = (props) => {
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
        <div>
          <h6 className="text-center">Indisponível</h6>
          <div className="shoesize">
            <div className="shoesize-child-inative">34</div>
            <div className="shoesize-child-inative">35</div>
            <div className="shoesize-child-inative">36</div>
            <div className="shoesize-child-inative">37</div>
            <div className="shoesize-child-inative">38</div>
            <div className="shoesize-child-inative">40</div>
          </div>
        </div>
        <Card.Title className="text-center h5 font-weight-normal font-1">
          Faça a Sua Encomenda
        </Card.Title>
        <Card.Body>
          <p>
            Encomendas podem levar até 15 dias úteis para a fabricação e entrega, fazendo-a voce estará ciente do tempo de entrega 

          </p>
          <div className="display-flex">
            <a className="btn-wp" target="blank" href={props.link}>
              <Image
                src="/icons/whatsapp-footer-icon.png"
                alt="whats-icon"
                width={32}
                height={32}
              />
              Encomende Aqui
            </a>
          </div>
        </Card.Body>
      </Card>

    </>
  )
}

export default CardIndisponible
