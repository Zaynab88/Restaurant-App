import Image from "react-bootstrap/Image";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import p2 from "../Assets/p2.png";
import Menu from "./Menu";

function Home() {
  return (
    <>
      <div className=" fluid d-flex
      w-100 m-0 p-0"  style={{ background: "#303030" }}>
        <Container className="w-100">
          <Row>
            <Col
              className=" d-flex align-items-center justify-content-end "
              sm={6}
            >
              <p
                className="text-end align-center fs-1 fw-bold"
                style={{ color: "white" }}
              >
                {" "}
                ENJOY OUR
                <br />
                DELICIOS
                <span style={{ color: "#FF9200" }}> FOOD </span>{" "}
              </p>
            </Col>
            <Col sm={6}>
              <Image src={p2} className="image-fluid w-100 p-4 "></Image>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={2}></Col>
          <Col sm={6} className="justify-content-center ms-2">
            <Button variant="outline-primary">Popular</Button>{" "}
            <Button variant="outline-secondary">Pizza</Button>{" "}
            <Button variant="outline-success">Burger</Button>{" "}
            <Button variant="outline-warning">Desert</Button>{" "}
            <Button variant="outline-danger">Drinks</Button>{" "}
          </Col>
          <Stack
            direction="horizontal"
            gap={2}
            className="d-flex align-items-center mt-4"
          >
           
           
          </Stack>
        </Row>
        <Row>

          <Menu/>
        </Row>
      </Container>
    </>
  );
}

export default Home;
