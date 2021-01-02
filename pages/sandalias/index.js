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
            price="105,90"
            titulo="Sandália Branca C/ Fita"
            setSize39="ative"
            material="Verniz"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/37lJkNt"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sandalia-bloco-home.jpg"
            alt="sandalia-branca"
            price="101,90"
            titulo="Sandália em Bloco Nude"
            setSize37="ative"
            material="Verniz"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/38qavpG"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sandalia-nuderose-pagina.jpg"
            alt="sandalia-nude-rose"
            price="99,90"
            titulo="Sandália Nude C/ Rose"
            setSize38="ative"
            material="Verniz e Napa"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/3gRW4i4"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sandalia-marrombege-pagina.jpg"
            alt="sandalia-marrom-com-bege"
            price="103,90"
            titulo="Sandália Marron C/ Cordas"
            setSize36="ative"
            setSize38="ative"
            setSize39="ative"
            material="Verniz e Napa"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/3mgDf9a"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sandalia-offwhitecobra-pagina.jpg"
            alt="sandalia-offwhite-cobra"
            price="119,90"
            titulo="Sandália Off White Cobra"
            setSize37="ative"
            material="Verniz e Couro Sintético"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/386cBL1"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sandalia-preta-pagina.jpg"
            alt="sandalia-preta"
            price="89,90"
            titulo="Sandália Preta Premium"
            setSize35="ative"
            setSize39="ative"
            material="Verniz"
            descrição="Sandalia Confort, linha Premium"
            link="https://bit.ly/34h01Yf"
          />
        </Col>
        <Col>
          <CardWithWab
            src="/sandalia-nude-pagina.jpg"
            alt="sandalia-nude"
            price="89,90"
            titulo="Sandália Nude Premium"
            setSize35="ative"
            setSize37="ative"
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