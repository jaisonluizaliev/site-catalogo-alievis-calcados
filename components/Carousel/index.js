import {Carousel} from 'react-bootstrap'

export default function Caroulsel() {
  return (
    <>
      <Carousel>
        
        <Carousel.Item interval={1000}>
          <a href="/scarpin">
            <img
              className="d-block mx-auto carousel-vh carousel-vh-mob"
              src="/scarpin-home.jpg"
              alt="scarpin"
            />
          </a>
        </Carousel.Item>
        
        <Carousel.Item interval={1000}>
          <a href="/sandalias">
            <img
              className="d-block mx-auto carousel-vh carousel-vh-mob"
              src="/sandalia-offwhitecobra-pagina.jpg"
              alt="sandalia-offwhitecobra-pagina"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <a href="/tamanco">
            <img
              className="d-block mx-auto carousel-vh carousel-vh-mob"
              src="/tamanco-home.jpg"
              alt="tamanco"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <a href="/peeptoe">
            <img
              className="d-block mx-auto carousel-vh carousel-vh-mob"
              src="/peeptoe-home.jpg"
              alt="peeptoe"
            />
          </a>
        </Carousel.Item>
        
      </Carousel> 
    </>
  )
}


