import FooterItem from './FooterItem'

const Footer = () => {
  return (
    <>
      <div className="footer-details"> <a  href="/como-funciona">**CONSULTE NOSSAS CONDIÇÕES DE FRETE/ENTREGA AQUI</a> </div>
      <p className="footer-details">**15%OFF VÁLIDO SOMENTE DINHEIRO OU BOLETO À VISTA</p>
      <footer>
        <FooterItem
          src="/icons/facebook-footer-icon.png"
          alt="icone facebook"
          width={32}
          height={32}
          message="Curta Nos"
        />
        <FooterItem
          src="/icons/instagram-footer-icon.png"
          alt="icone instagram"
          width={32}
          height={32}
          message="Siga Nos"
        />
        <FooterItem
          src="/icons/whatsapp-footer-icon.png"
          alt="icone whatsapp"
          width={32}
          height={32}
          message="WhatsApp"
        />
        <div>
          <a href="https://bit.ly/2WK5PoU" target="blank" className="footer-link d-flex justify-content-center" >
            Feito Por JaisonDev
        </a>
        </div>
      </footer>
    </>
  )
}

export default Footer;
