import { Container, Image, Row, Col } from "react-bootstrap";
import animatedBanner from "../assets/hero-animation.gif";

function HeroBanner() {
  return (
    <>
      <section className="sec sec-hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="sec-head">
                <h2 className="sec-title mb-5">
                  Sing, Write, or Compose This Stage Is Yours.
                </h2>
                <p className="sec-sub-title mb-5">
                  A platform that helps new voices, songwriters, and composers
                  from every corner of India to showcase their talent and get
                  noticed.
                </p>
                <a href="#" className="btn btn-primary btn-lg rounded-pill">
                  <span>See How it Works</span>
                </a>
              </div>
            </Col>
            <Col md={6}>
              <Image src={animatedBanner} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HeroBanner;
