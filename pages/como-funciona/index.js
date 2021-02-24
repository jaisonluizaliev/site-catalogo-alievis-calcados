import Questions from '../../components/Duvidas'

const HowToWork = () => {
  return (
    <main >
      <div className="page-doubts">
        <h3>Perguntas Frequentas</h3>
        <Questions
          controls="q0"
          id="q0"
          pergunta="- COMO FUNCIONA A ENTREGA GRÁTIS ?"
          resposta="- Totalmente *GRATUITO* para entregas de até 40km, para valores acima de 69,90"
          resposta1="- Entregamos Presencialmente e estamos no sul da ilha de Florinópolis-SC"
          resposta2="- ENTREGAS acima de 40km, é acrescido os quiilometros extras"
        />
        <Questions
          controls="q01"
          id="q01"
          pergunta="- ONDE FICA A LOJA ?"
          resposta="- LOJA ONLINE SEM LOCAL FÍSICO"
          resposta1="- Estamos no Sul da ilha de Florinópolis-SC"
        />
        <Questions
          controls="q1"
          id="q1"
          pergunta=" - FORMAS DE PAGAMENTO?"
          resposta="- Dinheiro"
          resposta1="- Cartão de Débito"
          resposta2="- Crédito em até 3x"
          resposta3="- Deposito/Transferência - Somente Presencial!"
        />
        <Questions
          controls="q2"
          id="q2"
          pergunta="- COMO FUNCIONA A ENTREGA?"
          resposta="- A Retirar"
          resposta1="- Presencial (taxa 0,49 por KM acima de 60km!)"


        />
        <Questions
          controls="q3"
          id="q3"
          pergunta="- COMO EU FAÇO MINHA COMPRA?"
          resposta="- Vendemos pelo WhatsApp, você nos manda o item de seu interesse, passamos a disponibilidade e combinamos a entrega e a forma de pagamento."

        />
        <Questions
          controls="q4"
          id="q4"
          pergunta="- POSSO CONFIAR EM VOCÊS?"
          resposta="- a confiança é mútua, prezamos pela sua e pela nossa segurança, preferimos realizar nossas entregas em um local público ao dia, quanto a confiança temos depoimentos de nossos clientes!"
        />
        <Questions
          controls="q5"
          id="q5"
          pergunta="- TROCA / DEVOLUÇÃO / DESISTÊNCIA"
          resposta="- Preferimos que voce tire todas as duvidas antes da entrega para evitarmos transtornos devido a muitas das vezes as entregas serem distantes!"
          resposta1="- Em caso de desistência, após ja termos ido até sua entrega, é cobrado taxa de nosso deslocamento"
        />
      </div>
    </main>
  )
}

export default HowToWork;

