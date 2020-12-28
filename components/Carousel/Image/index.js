
const Image = (props) => {
  return <img className="d-block mx-auto carousel-vh carousel-vh-mob carousel-t" 
  src={props.src} 
  alt={props.alt}
  width={600}
  height={600}
  />
}

export default Image
