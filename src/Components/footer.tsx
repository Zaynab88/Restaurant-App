import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';
function Footer() {

  return (
    <>
      <Row>

        <Navbar bg="dark" variant="dark">
          <Col sm={2}>

          </Col>
          <Col sm={3}>
            <Container>
              <Navbar.Brand>


                <span style={{ color: "ffff" }} className='fw-bolder-m-1 P-1'>  OBSD  </span>
                <Image  style={{ width: "1rem", height: "1rem" }} src={require('../Assets/logo.png')} ></Image>


              </Navbar.Brand>
              

            </Container>
          </Col>
          <Col sm={7}>
            <Container>
              <Navbar.Brand>


                <span style={{ color: "ffff" }} className='fw-bolder justfy-contet-left'>                    &copy;2022 OBSD All Rights Reserved</span>


              </Navbar.Brand>
              

            </Container>
          </Col>
       
        </Navbar>
      </Row>
    </>
  );
}
export default Footer;