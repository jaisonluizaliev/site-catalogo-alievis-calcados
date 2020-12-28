import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Questions from '../../components/Duvidas'

const HowToWork = () => {
  return (
    <main >
      <Row className="d-block mb-5">
        <Col className="mx-auto w-75">
          <h3 className="font pt-5 pb-5">Principais dúvidas de nossos clientes</h3>
          <Questions
            controls="q1"
            id="q1"
            pergunta=" - Formas De Pagamento?"
            resposta="- Dinheiro"
            resposta1="- Cartão de Débito"
            resposta2="- Crédito em até 3x"
            resposta3="- Deposito/Transferência - Somente Presencial!"
          />
          <Questions
            controls="q2"
            id="q2"
            pergunta="- Formas de Entrega?"
            resposta="- A Retirar"
            resposta1="- Residencial (taxa 0,49 por KM)"
            resposta2="- Correios"
            
          />
          <Questions
            controls="q3"
            id="q3"
            pergunta="- Como Comprar?"
            resposta="- Vendemos pelo WhatsApp, você nos manda o item de seu interesse, passamos a disponibilidade e combinamos a entrega e a forma de pagamento."
            
          />
          <Questions
            controls="q4"
            id="q4"
            pergunta="- É Seguro?"
            resposta="- Prezamos pela sua e pela nossa segurança, preferimos realizar nossas entregas em um local público ao dia, quanto a confiança temos vários depoimentos de nossos clientes!"
          />
          <Questions
            controls="q5"
            id="q5"
            pergunta="- Troca e Devolução"
            resposta="- Preferimos que voce prove seu calçado e veja se ele está adequado para evitarmos transtornos devido a muitas das vezes as entregas serem longas!"
          />
          <Questions
            controls="q6"
            id="q6"
            pergunta="- Posso Desistir da Compra?"
            resposta="- Nós aconselhamos a tirar todas as dúvidas antes da entrega, caso haja a desistência da compra, pedimos a gentileza de ser pago uma taxa de deslocamento, se a mesma for no local"
          />

        
        </Col>
      </Row>
    </main>
  )
}

export default HowToWork;

