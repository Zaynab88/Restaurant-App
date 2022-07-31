
import { Row, Col } from 'react-bootstrap';
import menuItems from '../data/items.json';
import  {MenuItem} from "../Components/MenuItem";

 function Menu() {
  return (
  <>
    <Row  md={2} xs={1} lg={3} className="g-3">
    { menuItems.map(item=>(
      <Col key={item.id}>
      <MenuItem {...item}/>
      </Col>
    ))}
  
  </Row>
  
  
  </>
  )
}

export default Menu