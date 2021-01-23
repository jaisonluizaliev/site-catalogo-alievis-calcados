import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardWithWab from '../../components/CardWithWab'

const Rasteiras = () => {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        
        <Col>
          <CardWithWab
            src="/images/rasteira-tyedielilas-pagina.jpg"
            alt="tye-dye-lilas"
            price="22,94"
            atSight="68,82"
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
            src="/images/rasteira-azul.jpg"
            alt="rasteira azul"
            price="10,61"
            atSight="31,83"
            off="27,05"
            off1="22,28"
            titulo="Rasteira Azul, Semi-brilho"
            setSize39="ative"
            material="Napa sintético"
            descrição="Sandália rasteira feminina na cor azul, taloneira na cor caramelo e sola emborrachada na cor natural com saltinho de 1cm."
          />
        </Col>
       
        
      </Row>
    </main>
  )
}

export default Rasteiras;