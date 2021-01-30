import { useState} from 'react'
import {BurguerStyle, Logo, MenuStyle} from './styles'

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Menu>
      <Logo>
          <img src="/images/logo.png" alt="Logo Site" width={100} height={60}/>
      </Logo>
      <BurguerStyle open={open} onClick={() => { setOpen(!open) }}>
        <div />
        <div />
        <div />
      </BurguerStyle>
    </Menu>
  )
}

export default Menu
