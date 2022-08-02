import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { useOrderCart } from "../Context/OrderCartContext";
import { formatCurrency } from "../Utility/formatcurrency";
import menuItems from "../data/items.json";
import { CartItem } from "../Components/CartItem";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const { cartItems } = useOrderCart();
  const navigate = useNavigate()

  return (
    <>
    <div style={{ minHeight: "calc(100vh - 80px)" }}>
      <Row>
        <Col>
          {" "}
          <Form className=" mt-4 p-4 align  min-vh-50" >
            <Form.Group className="mb-3">
              <Form.Label>name</Form.Label>
              <Form.Control type="customerName" placeholder="Enter your name" />
              <Form.Label>mobile</Form.Label>
              <Form.Control
                type="customerName"
                placeholder="Enter your phone number"
              />
              <Form.Label>address</Form.Label>
              <Form.Control
                type="customerName"
                placeholder="Enter your address"
              />
              <Form.Label>city</Form.Label>
              <Form.Control type="customerName" placeholder="Enter your city" />
            </Form.Group>

           
          </Form>
        </Col>

        <div className="vr" />

        <Col>
          <Stack className="fluid d-flex mt-4 p-4 align  min-vh-50">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = menuItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        </Col>
      </Row>
      <Button
             onClick={() => navigate("/Order_Success")}

              variant="danger"
              type="submit"
            >
              Submit
            </Button>
            </div>
    </>
  );
}
