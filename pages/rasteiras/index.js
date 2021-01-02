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
            price="64,90"
            titulo="Rasteira Tye Dye Lilas C/ Strass"
            setSize37="ative"
            material="Couro Sintético"
            descrição="Linha Confort"
            link="https://bit.ly/3r1NqCc"
          />
        </Col>
       
        
      </Row>
    </main>
  )
}

export default Rasteiras;