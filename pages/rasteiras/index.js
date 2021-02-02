import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardWithWab from '../../components/CardWithWab'

const Rasteiras = () => {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        
        <Col>
          <CardWithWab
            src="/rasteira-tyedielilas-pagina.jpg"
            alt="tye-dye-lilas"
            price="22,94"
            atSight="59,90"
            off="58,49"
            off1="48,17"
            titulo="Rasteira Tye Dye Lilas C/ Strass"
            setSize37="ative"
            material="Couro Sintético"
            descrição="Linha Confort"
            link="https://bit.ly/3r1NqCc"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/rasteira-azul.jpg"
            alt="rasteira azul"
            price="14,11"
            atSight="39,90"
            off="27,05"
            off1="22,28"
            titulo="Rasteira Azul, Semi-brilho"
            setSize39="ative"
            material="Napa sintético"
            descrição="Sandália rasteira feminina na cor azul, taloneira na cor caramelo e sola emborrachada na cor natural com saltinho de 1cm."
          />
        </Col>
        <Col>
          <CardWithWab
            src="/rasteira-super-laco.jpg"
            alt="rasteira super laço"
            price="17,64"
            atSight="49,90"
            off="27,05"
            off1="22,28"
            titulo="Rasteira Super Laço"
            setSize35="ative"
            setSize37="ative"
            material="Napa sintético"
            descrição="Sandália rasteira feminina na cor azul, taloneira na cor caramelo e sola emborrachada na cor natural com saltinho de 1cm."
          />
        </Col>
       
        
      </Row>
    </main>
  )
}

export default Rasteiras;