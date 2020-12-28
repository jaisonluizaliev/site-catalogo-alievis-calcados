import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardWithWab from '../../components/CardWithWab'

const Mocassim = () => {
  return (
    <>
      
      <Row lg={3} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/mocassim-azul-pagina.jpg"
            alt="mocassim azul"
            titulo="Mocassim Azul"
            tamanho="37 e 38"
            material="Verniz Sintético"
            descrição="Mocassim feminino na cor azul c/ enfeite na cor dourado, para maior conforto forro em cacharrel na cor off white, taloneira na cor Off White e sola emborrachada c/ saltinho de 1cm na cor natural."
            link="https://bit.ly/3nlQG96"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/mocassim-marrom-pagina.jpg"
            alt="mocassim marrom"
            titulo="Mocassim Terracota"
            tamanho="38"
            material="Napa Sintético"
            descrição="Mocassim Feminino na cor terracota c/ enfeite na cor dourado, para maior conforto forro em cacharrel na cor off white, taloneira na cor Off White e sola emborrachada c/ saltinho de 1cm na cor natural."
            link="https://bit.ly/3abPCRy"
          />
        </Col> 
        <Col>
          <CardWithWab
            src="/mocassim-home.jpg"
            alt="mocassim rosa antigo"
            titulo="Mocassim Rosa Antigo"
            tamanho="36 e 38"
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
