import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardWithWab from '../../components/CardWithWab'

const Mocassim = () => {
  return (
    <>
      
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            className="info-30off"
            src="/mocassim-azul-pagina.jpg"
            alt="mocassim azul"
            price="22,79"
            off="58,12"
            off1="47,86"
            atSight="68,38"
            titulo="Mocassim Azul"
            setSize37="ative"
            setSize38="ative"
            material="Verniz Sintético"
            descrição="Mocassim feminino na cor azul c/ enfeite na cor dourado, para maior conforto forro em cacharrel na cor off white, taloneira na cor Off White e sola emborrachada c/ saltinho de 1cm na cor natural."
            link="https://bit.ly/3nlQG96"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/mocassim-marrom-pagina.jpg"
            alt="mocassim marrom"
            price="24,04"
            atSight="72.12"
            off="61,30"
            off1="50,48"
            titulo="Mocassim Terracota"
            setSize38="ative"
            material="Napa Sintético"
            descrição="Mocassim Feminino na cor terracota c/ enfeite na cor dourado, para maior conforto forro em cacharrel na cor off white, taloneira na cor Off White e sola emborrachada c/ saltinho de 1cm na cor natural."
            link="https://bit.ly/3abPCRy"
          />
        </Col> 
        <Col>
          <CardWithWab
            src="/mocassim-home.jpg"
            alt="mocassim rosa antigo"
            price="21,92"
            atSight="65,76"
            off="55,89"
            off1="46,03"
            titulo="Mocassim Rosa Antigo"
            setSize38="ative"
            material="Verniz Sintético"
            descrição="Mocassim feminino na cor rosa antigo, para maior conforto forro em cacharrel na cor off white, taloneira na cor Off White e sola emborrachada c/ saltinho de 1cm na cor natural."
            link="https://bit.ly/2K0ZYJs"
          />
        </Col>   
      </Row>
    </>
  )
}

export default Mocassim;
