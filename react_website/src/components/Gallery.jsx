import { Container, Image, Row, Col } from "react-bootstrap";
import QrCode from "../assets/QR-code.png";
import shareIcon from "../assets/share-icon.svg";

function Gallery() {
  return (
    <>
      <section className="sec sec-gallery pb-0">
        <Container>
          <div className="sec-head text-center mb-5">
            <h2 className="sec-title">Captured Beats, Endless Memories</h2>
            <p className="sec-sub-title">
              Experience the essence of myYOUsic through moments that celebrate
              creativity and connection.
            </p>
          </div>
          <Row className="gy-4">
            <Col md={3}>
              <div className="gallery-item"></div>
            </Col>
            <Col md={3}>
              <div className="gallery-item"></div>
            </Col>
            <Col md={3}>
              <div className="gallery-item"></div>
            </Col>
            <Col md={3}>
              <div className="gallery-item"></div>
            </Col>
            <Col md={3}>
              <div className="gallery-item"></div>
            </Col>
            <Col md={3}>
              <div className="gallery-item"></div>
            </Col>
            <Col md={3}>
              <div className="gallery-item"></div>
            </Col>
            <Col md={3}>
              <div className="gallery-item"></div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Gallery;
