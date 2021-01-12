import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Nav from 'react-bootstrap/Nav'



const Questions = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <article>
      <Nav.Link
        onClick={() => setOpen(!open)}
        aria-controls={props.controls}
        aria-expanded={open}
        className="question"
      >
        {props.pergunta} ▼
      </Nav.Link>
      <Collapse in={open}>
        <div id={props.id} className="answer">
          <p>{props.resposta}</p>
          <p>{props.resposta1}</p>
          <p>{props.resposta2}</p>
          <p>{props.resposta3}</p>
        </div>
      </Collapse>
    </article>
  )
}

export default Questions;