import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Logo from '../Assets/logo.png';
import { useOrderCart } from "../Context/OrderCartContext"

function Navbar() {
  const { openCart, cartQuantity } = useOrderCart()

  return (
    <>
      <NavbarBs  bg="dark" variant="dark" >
        <Container>


          <Nav>

            <Nav.Link to="/" as={NavLink}>
            <span style={{ color: "ffff" }} className='fw-bolder-m-1 P-1'>   OBSD  </span>
            <Image style={{ width: "1rem", height: "1rem" }} src={Logo} ></Image>

            </Nav.Link>
            
            <Nav.Link to="/Menu" as={NavLink} className="justify-content-right align-items-right" >
            <span className="justify-content-right align-items-right fw-bolder  m-1 P-1" style={{ color: "ffff" }} >           Menu    </span>
            </Nav.Link>
            <Nav.Link to="/mostPopular" as={NavLink} className="justify-content-right align-items-right" >
            <span className="justify-content-right align-items-right fw-bolder  m-1 P-1" style={{ color: "ffff" }} >    
                                    Most Popular </span>
            </Nav.Link>
          </Nav>
       

           <Image onClick={openCart} 
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            className="rounded-circle"  src={require('../Assets/cart.png')} ></Image>
          </Container>
      </NavbarBs>
    </>
  );
}

export default Navbar;
