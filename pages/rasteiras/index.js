import { Row, Col } from 'react-bootstrap'
import CardWithWab from '../../components/CardWithWab/index'

export default function Rasteiras() {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        
        <Col>
          <CardWithWab
            src="/rasteira-tyedielilas-pagina.jpg"
            alt="tye-dye-lilas"
            titulo="Rasteira Tye Dye Lilas C/ Strass"
            tamanho="37"
            material="Couro Sintético"
            descrição="Linha Confort"
            link="https://bit.ly/3r1NqCc"
          />
        </Col>
       
        
      </Row>
    </main>
  )
}