import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardWithWab from '../../components/CardWithWab'
import CardIndisponible from '../../components/CardIndisponible'

const Rasteiras = () => {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/rasteira-tres-laco-verde-agua.jpg"
            alt="rasteira super laço"
            price="10,57"
            atSight="29,90"
            off="27,05"
            off1="22,28"
            titulo="Rasteira 3 laços Verde Água"
            setSize37="ative"
            material="Napa sintético"
            descrição="Sandália rasteira feminina na cor verde água, taloneira na cor caramelo e sola emborrachada na cor natural com saltinho de 1cm."
            link="https://bit.ly/2LDqoBK"
          />
        </Col>
       

        <Col>
          <CardWithWab
            src="/rasteira-tres-laco-laranja.jpg"
            alt="rasteira super laço"
            price="10,57"
            atSight="29,90"
            off="27,05"
            off1="22,28"
            titulo="Rasteira 3 laços Laranja"
            setSize36="ative"
            material="Napa sintético"
            descrição=" Sandália rasteira feminina na cor verde água, taloneira na cor caramelo e sola emborrachada na cor natural com saltinho de 1cm.."
            link="https://bit.ly/3jAybwt"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/rasteira-tres-laco-tyedie.jpg"
            alt="rasteira tres laços tie dye"
            price="10,57"
            atSight="29,90"
            off="27,05"
            off1="22,28"
            titulo="Rasteira 3 laços Tie Dye"
            setSize40="ative"
            material="Napa sintético"
            descrição="Sandália rasteira feminina na cor tyeDie, taloneira na cor caramelo e sola emborrachada na cor natural com saltinho de 1cm."
            link="https://bit.ly/3rDZrND"

          />
        </Col>
        
        <Col>
          <CardWithWab
            src="/rasteira-tres-laco-bege.jpg"
            alt="rasteira super laço"
            price="10,57"
            atSight="29,90"
            off="27,05"
            off1="22,28"
            titulo="Rasteira 3 laços Cappucino"
            setSize35="ative"
            material="Napa sintético"
            descrição="Sandália rasteira feminina na cor capuccino, taloneira na cor caramelo e sola emborrachada na cor natural com saltinho de 1cm."
            link="https://bit.ly/3rzTxNx"
          />
        </Col>
       
        
        <Col>
          <CardWithWab
            src="/rasteira-azul.jpg"
            alt="rasteira azul"
            price="10,57"
            atSight="29,90"
            off="27,05"
            off1="22,28"
            titu10="Rasteira Azul, Semi-brilho"
            setSiz236="ative"
            setSize39="ative"
            material="Verniz sintético"
            descrição="Sandália rasteira feminina na cor azul, taloneira na cor caramelo e sola emborrachada na cor natural com saltinho de 1cm."
            link="https://bit.ly/3jBnslF"
          />
        </Col>

        <Col>
          <CardWithWab
            src="/rasteira-preta-verniz.jpg"
            alt="rasteira azul"
            price="10,,57"
            atSight="29,90"
            off="27,05"
            off1="22,28"
            titulo="Rasteira Verniz Preta"
            setSize37="ative"
            material="Verniz sintético"
            descrição="Sandália rasteira feminina na cor preto, forro na cor caramelo, taloneira na cor caramelo e sola emborrachada na cor natural com saltinho de 1cm."
            link="https://bit.ly/37gooXR"
          />
        </Col>
        
        <Col>
          <CardIndisponible
            src="/rasteira-tyedielilas-pagina.jpg"
            alt="tye-dye-lilas"
            // price="22,94"
            // atSight="59,90"
            // off="58,49"
            // off1="48,17"
            titulo="Rasteira Tye Dye Lilas C/ Strass"
            // setSize37="ative"
            material="Couro Sintético"
            descrição="Linha Confort"
            link="https://bit.ly/3r1NqCc"
          />
        </Col>
        <Col>
          <CardIndisponible
            src="/rasteira-super-laco.jpg"
            alt="rasteira super laço"
            // price="17,64"
            // atSight="49,90"
            // off="27,05"
            // off1="22,28"
            titulo="Rasteira Super Laço"
            // setSize35="ative"
            // setSize37="ative"
            material="Napa sintético"
            descrição="Sandália rasteira feminina na cor azul, taloneira na cor caramelo e sola emborrachada na cor natural com saltinho de 1cm."
            link="https://bit.ly/3aS7Ciu"

          />
        </Col>
      </Row>
    </main>
  )
}

export default Rasteiras;