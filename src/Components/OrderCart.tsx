import { Button, Container, Modal, Offcanvas, Row, Stack } from "react-bootstrap";
import {useOrderCart} from '../Context/OrderCartContext';
import {CartItem} from "./CartItem";
import menuItems from "../data/items.json";
import { useNavigate } from 'react-router-dom'      

import {formatCurrency} from "../Utility/formatcurrency";

type orderCartProps ={


    isOpen:boolean
}
//ASK FOR DEFFERNCE BETWEEN TYPE & INTERFACE10
  
export function OrderCart({isOpen}:orderCartProps) {

const { closeCart, cartItems } = useOrderCart()
const navigate = useNavigate()

  return (
    <>
<Container className="fluid d-flex justify-content-right " >
<Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>ORDER</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = menuItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
        <Button onClick={() => navigate("/checkout")} style={{background:"#FF9200"}} >
              Checkout        </Button>
      </Offcanvas.Body>
    </Offcanvas>
   
      </Container>
  </>
    )
  }

