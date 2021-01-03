import Image from './Image'

const FooterItem = (props) => {
  return (
    <div className="footer-item">
      <a target="blank" href="http://bit.ly/34Bawpy">
        <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
      </a>
      <p>{props.message}</p>
    </div>
  )
}

export default FooterItem
