import { Button, Card } from "react-bootstrap";
import p2 from "../Assets/p2.png";
import {formatCurrency} from "../Utility/formatcurrency";
import { useOrderCart } from "../Context/OrderCartContext";
import menuItems from "../data/items.json";
import {menuItemProps} from '../types';

 export function MenuItem({ id, name, price }: menuItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useOrderCart();
  const quantity = getItemQuantity(id);
  const item = menuItems.find((i) => i.id === id)
  return (
    <Card className="h-100">
      <Card.Img
        className="image-fluid w-100 p-4"
        variant="top"
        src={p2}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <div>  {name} </div>
          <br/>
          <br/>
          <div> Ingredients: {item?.ingredients} </div>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

