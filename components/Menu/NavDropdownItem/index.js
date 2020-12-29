import NavDropdown from 'react-bootstrap/NavDropdown';

const NavDropItem = (props) => {
  return (
    <>
      <NavDropdown.Item className="padding-menu-dropdown" href={props.href}>{props.item}</NavDropdown.Item>
    </>
  )
}

export default NavDropItem
