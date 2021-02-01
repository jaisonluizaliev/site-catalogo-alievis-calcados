import { useState } from 'react'
import styled from 'styled-components';

const Burguer = styled.div`

  display: none;
  @media(max - width: 999px) {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify - content: space - around;
  flex - flow: column nowrap;




  div {
    width: 2rem;
    height: 0.25rem;
    background - color: ${({ open }) => open ? '#ccc' : '#333'};
    border - radius: 10px;
    transform - origin: 1px;
    transition: all 0.2s linear;

      &: nth - child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
       &: nth - child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
       &: nth - child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

  }
}`


export default function Menu() {
  const [open, setOpen] = useState(false)


  return (
    <>
      <img>
        <img src="/images/logo.png" alt="Logo Site" width={100} height={60} />
      </img>
      <Burguer open={open} onClick={() => { setOpen(!open) }}>
        <div />
        <div />
        <div />
      </Burguer>
    </>
  )
}

