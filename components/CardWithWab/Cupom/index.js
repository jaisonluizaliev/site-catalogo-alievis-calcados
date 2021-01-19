
const CupomThirty = ({off1}) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;
  
  return (
    <>
      <div className="display-flex mt-3">
        <p className="span-card-value-off-1">CUPOM 30%OFF <strong>${off1}*</strong> </p>
      </div>
      <p className="info-off30">*CUPOM 30%OFF Válido somente hoje {today}</p>
      <p className="info-off30">*CUPOM 30%OFF Disponível apenas para entregas no sul da ilha de Florianópolis-SC no pagamento à Vista</p>
      </>
  )
}

export default CupomThirty
