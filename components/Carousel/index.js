import Carousel from 'react-bootstrap/Carousel'
import Image from './Image'

const CarouselComp = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <a href="/sandalias">
            <Image
              src="/sandalia-home.jpg"
              alt="sandalia branca"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <a href="/scarpin">
            <Image
              src="/scarpin-vinho-pagina.jpg"
              alt="scarpin vinho"
            />
          </a>
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <a href="/sandalias">
            <Image
              src="/sandalia-marrombege-pagina.jpg"
              alt="sandalia marrom com beje"
            />
          </a>
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <a href="/peeptoe">
            <Image
              src="/sandalia-bloco-home.jpg"
              alt="peeptoe preto"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <a href="/peeptoe">
            <Image
              src="/peeptoe-preto-pagina.jpg"
              alt="peeptoe preto"
            />
          </a>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <a href="/sapatilhas">
            <img
              className="slide-home"
              src="/sapatilha-napa-chocolate.jpg"
              alt="sandalia em bloco"
            />
          </a>
        </Carousel.Item>
        
      </Carousel> 
    </>
  )
}

export default CarouselComp;


