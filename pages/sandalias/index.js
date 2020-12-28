import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardWithWab from '../../components/CardWithWab'

const Sandalias = () => {
  return (
    <main>
      <Row lg={4} xs={1} md={2}>
        <Col>
          <CardWithWab
            src="/sandalia-home.jpg"
            alt="sandalia-branca"
            titulo="Sandália Branca C/ Fita"
            tamanho="39"
            material="Verniz"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/37lJkNt"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sandalia-bloco-home.jpeg"
            alt="sandalia-branca"
            titulo="Sandália em Bloco Nude"
            tamanho="37"
            material="Verniz"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/38qavpG"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sandalia-nuderose-pagina.jpg"
            alt="sandalia-nude-rose"
            titulo="Sandália Nude C/ Rose"
            tamanho="38"
            material="Verniz e Napa"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/3gRW4i4"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sandalia-marrombege-pagina.jpg"
            alt="sandalia-marrom-com-bege"
            titulo="Sandália Marron C/ Cordas"
            tamanho="36, 38 e 39"
            material="Verniz e Napa"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/3mgDf9a"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sandalia-offwhitecobra-pagina.jpg"
            alt="sandalia-offwhite-cobra"
            titulo="Sandália Off White Cobra"
            tamanho="37"
            material="Verniz e Couro Sintético"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/386cBL1"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sandalia-preta-pagina.jpg"
            alt="sandalia-preta"
            titulo="Sandália Preta Premium"
            tamanho="35 e 39"
            material="Verniz"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/34h01Yf"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sandalia-nude-pagina.jpg"
            alt="sandalia-nude"
            titulo="Sandália Nude Premium"
            tamanho="35 e 37"
            material="Verniz"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/2KaBdKP"
          />
        </Col>
      </Row>
    </main>
  )
}

export default Sandalias;