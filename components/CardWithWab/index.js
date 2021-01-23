import Card from 'react-bootstrap/Card'
import Image from 'next/image';
import CupomThirty from './Cupom'


//const linkWhats = "https://api.whatsapp.com/send?phone=5548988467451&text=Olá%20você%20tem%20este%20calçado %20disponível%20no%20número%20"

const CardWithWab = (props) => {
  
  
  return (
    <>
      <Card className="mt-2 mb-2">
        <div className="w-100 mx-auto pb-3">
          <p className="offer-img">15%OFF À VISTA/BOLETO</p>
          <Image
            src={props.src}
            alt={props.alt}
            width={500}
            height={500}
          />
          <p className="offer-img">ENTREGA GRÁTIS*</p>
          {/* <div className="display-flex mt-3">
            <p className="span-card-value-off">CUPOM 15%OFF ${props.off}*</p>
            
          </div> */}
          <CupomThirty
            off1={props.off1}
          />
          {/* <div className="price">
            <p className="span-card-plotes">À Vista ${props.atSight}</p>
            <p className="span-card-value">3x ${props.price}</p>
          </div> */}
        </div>
        <div>
          <h6 className="text-center">Numeração Disponível<span className="span-card"> ( Em Verde )</span></h6>
          <div className="shoesize">
            <div id={props.setSize34} className="shoesize-child-inative">34</div>
            <div id={props.setSize35} className="shoesize-child-inative">35</div>
            <div id={props.setSize36} className="shoesize-child-inative">36</div>
            <div id={props.setSize37} className="shoesize-child-inative">37</div>
            <div id={props.setSize38} className="shoesize-child-inative">38</div>
            <div id={props.setSize39} className="shoesize-child-inative">39</div>
          </div>
        </div>
        <Card.Title className="text-center h5 font-weight-normal font-1">
          {props.titulo}
        </Card.Title>
        <Card.Body>
          <div className="lead p-0 m-0 font-2">
            <p><strong>Material: </strong>{props.material}</p>
            <strong>Descrição: </strong><p>{props.descrição}</p>
            <p>Mais Fotos no WhatsApp.</p>
          </div>
          <div className="display-flex">
            <a className="btn-wp" target="blank" href={props.link}>
              <Image
                src="/icons/whatsapp-footer-icon.png"
                alt="whats-icon"
                width={32}
                height={32}
              />
              Compre No WhatsApp
            </a>
          </div>
        </Card.Body>
      </Card>
      
    </>
  )
}

export default CardWithWab;