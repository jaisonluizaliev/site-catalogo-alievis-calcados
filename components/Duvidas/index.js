import { useState } from 'react'
import { Collapse, Nav } from 'react-bootstrap'


export default function Questions(props) {
  const [open, setOpen] = useState(false)

  return (
    <section>
      <Nav.Link
        onClick={() => setOpen(!open)}
        aria-controls={props.controls}
        aria-expanded={open}
        className="text-nowrap font-1 font-1-md font-1-lg p-2"
      >
        {props.pergunta} ▼
      </Nav.Link>
      <Collapse in={open}>
        <div id={props.id} className="font-2 font-2-md font-2-lg">
          <p>{props.resposta}</p>
          <p>{props.resposta1}</p>
          <p>{props.resposta2}</p>
          <p>{props.resposta3}</p>
        </div>
      </Collapse>
    </section>
  )
}