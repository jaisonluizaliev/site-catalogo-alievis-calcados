import Carousel from 'react-bootstrap/Carousel'
import Image from './Image'

const CarouselComp = () => {
  return (
    <>
      <Carousel>
        
        <Carousel.Item interval={2000}>
          <a href="/scarpin">
            <Image
              src="/scarpin-home.jpg"
              alt="scarpin"
            />
          </a>
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <a href="/sandalias">
            <Image
              src="/sandalia-offwhitecobra-pagina.jpg"
              alt="sandalia-offwhitecobra-pagina"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <a href="/tamanco">
            <Image
              src="/tamanco-home.jpg"
              alt="tamanco"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <a href="/peeptoe">
            <Image
              src="/peeptoe-home.jpg"
              alt="peeptoe"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <a href="/sandalias">
            <img
              className="slide-home hvh" 
              src="/sandalia-bloco-home.jpeg"
              alt="sandalia em bloco"
            />
          </a>
        </Carousel.Item>
        
      </Carousel> 
    </>
  )
}

export default CarouselComp;


