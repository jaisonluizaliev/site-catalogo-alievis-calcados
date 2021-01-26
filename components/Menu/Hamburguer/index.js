import styled from "styled-components"

const Burguer = styled.div`
  display:none;
  @media (max-width:768px) {
    width:2rem;
    height:2rem;
    position:absolute;
    top:15px;
    right:18px;
    display:flex;
    justify-content:space-around;
    flex-flow:column nowrap;

    div {
      width:2rem;
      height:0.25rem;
      background-color:#333;
      border-radius:10px;
    }
  }

`;

const Hamburguer = () => {
  return (
    <Burguer>
      <div/>
      <div/>
      <div/>
    </Burguer>
  )
}

export default Hamburguer


