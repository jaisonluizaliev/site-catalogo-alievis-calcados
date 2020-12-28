import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'

const CarouselComp = () => {
  return (
    <>
      <Carousel>
        
        <Carousel.Item interval={2000}>
          <a href="/scarpin">
            <img
              className="d-block mx-auto carousel-vh carousel-vh-mob carousel-t"
              src="/scarpin-home.jpg"
              alt="scarpin"
            />
          </a>
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <a href="/sandalias">
            <img
              className="d-block mx-auto carousel-vh carousel-vh-mob carousel-t"
              src="/sandalia-offwhitecobra-pagina.jpg"
              alt="sandalia-offwhitecobra-pagina"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <a href="/tamanco">
            <img
              className="d-block mx-auto carousel-vh carousel-vh-mob carousel-t"
              src="/tamanco-home.jpg"
              alt="tamanco"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <a href="/peeptoe">
            <img
              className="d-block mx-auto carousel-vh carousel-vh-mob carousel-t"
              src="/peeptoe-home.jpg"
              alt="peeptoe"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <a href="/sandalias">
            <img
              className="d-block mx-auto carousel-vh carousel-vh-mob carousel-t hvh"
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


