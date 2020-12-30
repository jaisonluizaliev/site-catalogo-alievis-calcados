
const Image = (props) => {
  return <img className="icons-adjust"
    src={props.src}
    alt={props.alt}
    width={props.width}
    height={props.height}
  />
}

export default Image