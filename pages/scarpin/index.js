import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardWithWab from '../../components/CardWithWab'
import CardIndisponible from '../../components/CardIndisponible'

const Scarpin = () => {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/scarpin-home.jpg"
            alt="scarpin-com-fita"
            price="35,32"
            off="90,06"
            atSight="105,96"
            off1="74,17"
            titulo="Scarpin C/ Fita"
            setSize37="ative"
            setSize38="ative"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/2WeNvUO"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/scarpin-preto-pagina.jpg"
            alt="scarpin-salto-fino"
            price="31,78"
            off="81,03"
            atSight="95,34"
            off1="66,73"
            titulo="Scarpin Preto Salto Fino"
            setSize37="ative"
            setSize39="ative"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/3nnrfEh"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/scarpin-preto-grosso-pagina.jpeg"
            alt="scarpin-preto-salto-grosso"
            price="31,43"
            atSight="94,29"
            off="80,14"
            off1="66,03"
            titulo="Scarpin Preto Salto Grosso"
            setSize38="ative"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/37n5ZIY"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/scarpin-vermelho-pagina.jpg"
            alt="scarpin-vermelho-salto-fino"
            price="32,49"
            atSight="97,47"
            off="82,84"
            off1="69,90"
            titulo="Scarpin Vermelho Salto Fino"
            setSize34="ative"
            setSize37="ative"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/34ddSz2"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/scarpin-nude-pagina.jpg"
            alt="scarpin-nude-salto-fino"
            price="31,78"
            atSight="95,34"
            off="81,03"
            off1="66,73"
            titulo="Scarpin Nude Salto Fino"
            setSize35="ative"
            setSize37="ative"
            setSize39="ative"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/34x20In"
          />
        </Col>
        <Col>
          <CardIndisponible
            src="/scarpin-nude-grosso-pagina.jpg"
            alt="scarpin-nude-salto-grosso"
            link="https://bit.ly/38ybGTN"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/scarpin-vinho-pagina.jpg"
            alt="scarpin-vinho-salto-fino"
            price="30,05"
            atSight="90,15"
            off="76,62"
            off1="63,10"
            titulo="Scarpin Vinho Salto Fino"
            setSize39="ative"
            material="Verniz"
            descrição="Salto linha Premium Confort, 8cm"
            link="https://bit.ly/3r9XGIG"
          />
        </Col>
      </Row>
    </main>
  )
}

export default Scarpin;