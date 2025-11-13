import { Container, Image, Row, Col } from "react-bootstrap";
import QrCode from "../assets/QR-code.png";
import shareIcon from "../assets/share-icon.svg";

function QrScanner() {
  return (
    <>
      <section className="sec sec-qr p-0">
        <Container>
          <div className="rounded-5 p-5 card-qr">
            <Row className="align-items-center">
              <Col md={6} className="sec-head">
                <h2 className="sec-title m-0">
                  Scan and Participate to <br />
                  Showcase Your Talent!
                </h2>
              </Col>
              <Col md={2} className="text-center">
                <Image src={QrCode} className="qr-code" alt="" />
                <p>Scan to Participate</p>
              </Col>
              <Col md={4}>
                <p className="text-large fw-medium">
                  Sing, Write, or Compose - Participate Now or Share This QR
                  with a Friend.
                </p>
                <a href="#" className="btn btn-primary rounded-pill">
                  <span>
                    <Image src={shareIcon} alt="" /> Share the QR
                  </span>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default QrScanner;
