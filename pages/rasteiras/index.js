import { Row, Col } from 'react-bootstrap'
import CardWithWab from '../../components/CardWithWab/index'

export default function Rasteiras() {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/rasteira-home.jpg"
            alt="Rasteira-nude-transparente"
            titulo="Rasteira Nude Slider"
            tamanho="37"
            material="Verniz"
            descrição="Linha Confort"
            link="https://bit.ly/3gOPLLU"
          />
        </Col>
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
        <Col>
          <CardWithWab
            src="/rasteira-tyediecoco-pagina.jpeg"
            alt="tye dye coco"
            titulo="Rasteira Fibra de Côco C/ Strass "
            tamanho="39"
            material="Couro Sintético"
            descrição="Linha confort"
            link="https://bit.ly/389gu1Q"
          />
        </Col>
        
      </Row>
    </main>
  )
}