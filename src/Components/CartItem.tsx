import { Button, Card, Stack } from "react-bootstrap";
import { useOrderCart } from "../Context/OrderCartContext";
import menuItems from "../data/items.json";
import  {formatCurrency}  from '../Utility/formatcurrency';
import p2 from '../Assets/p2.png';
import {CartItemProps} from '../types';

export function CartItem({ id, quantity}: CartItemProps) {



  const {
  
    removeFromCart,
  } = useOrderCart()
  const item = menuItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
    <img className=" p-4"
   src={p2}
      style={{ width: "175px", height: "145px" }}
    />
    <div className="me-auto">
      <div>
        {item.name}{" "}
        {quantity > 1 && (
          <span className="text-muted" style={{ fontSize: ".65rem" }}>
            x{quantity}
          </span>
        )}
      </div>
      <div className="text-muted" style={{ fontSize: ".75rem" }}>
        {formatCurrency(item.price)}
      </div>
    </div>
    <div> {formatCurrency(item.price * quantity)}</div>
    <Button
      variant="outline-danger"
      size="sm"
      onClick={() => removeFromCart(item.id)}
    >
      &times;
    </Button>
  </Stack>
  );
}


