import success from "../Assets/checked.png";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

export function Order_Success() {
  return (
    <>
      <Container className="w-100 m-0 p-0 d-flex justify-content-center align-items-center"  style={{ minHeight: "calc(100vh - 90px)" }}>
        
          <Image
            style={{ width: "175px", height: "145px" }}
            src={success}
          />
        
      </Container>
    </>
  );
}
