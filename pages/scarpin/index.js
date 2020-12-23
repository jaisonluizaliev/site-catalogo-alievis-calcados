import { Row, Col } from 'react-bootstrap'
import CardWithWab from '../../components/CardWithWab/index'

export default function Scarpin() {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/scarpin-home.jpg"
            alt="scarpin-com-fita"
            titulo="Scarpin C/ Fita"
            tamanho="37 e 38"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/2WeNvUO"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/scarpin-preto-pagina.jpg"
            alt="scarpin-salto-fino"
            titulo="Scarpin Preto Salto Fino"
            tamanho="37 e 39"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/3nnrfEh"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/scarpin-preto-grosso-pagina.jpeg"
            alt="scarpin-preto-salto-grosso"
            titulo="Scarpin Preto Salto Grosso"
            tamanho="38"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/37n5ZIY"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/scarpin-vermelho-pagina.jpg"
            alt="scarpin-vermelho-salto-fino"
            titulo="Scarpin Vermelho Salto Fino"
            tamanho="34 e 37"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/34ddSz2"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/scarpin-nude-pagina.jpg"
            alt="scarpin-nude-salto-fino"
            titulo="Scarpin Nude Salto Fino"
            tamanho="35, 37 e 39"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/34x20In"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/scarpin-nude-grosso-pagina.jpg"
            alt="scarpin-nude-salto-grosso"
            titulo="ESGOTADO somente sob encomenda"
            tamanho="0"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/38ybGTN"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/scarpin-vinho-pagina.jpg"
            alt="scarpin-vinho-salto-fino"
            titulo="Scarpin Vinho Salto Fino"
            tamanho="39"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/3r9XGIG"
          />
        </Col>
      </Row>
    </main>
  )
}