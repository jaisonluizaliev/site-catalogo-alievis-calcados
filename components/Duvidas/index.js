import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Nav from 'react-bootstrap/Nav'



const Questions = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <section>
      <Nav.Link
        onClick={() => setOpen(!open)}
        aria-controls={props.controls}
        aria-expanded={open}
        className="text-nowrap font-1 p-2"
      >
        {props.pergunta} ▼
      </Nav.Link>
      <Collapse in={open}>
        <div id={props.id} className="font-2">
          <p>{props.resposta}</p>
          <p>{props.resposta1}</p>
          <p>{props.resposta2}</p>
          <p>{props.resposta3}</p>
        </div>
      </Collapse>
    </section>
  )
}

export default Questions;