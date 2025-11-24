import { Container, Image, Row, Col } from "react-bootstrap";
import ArtistBg from "../assets/collabrate.mp4";

function ArtistUsp() {
  return (
    <>
      <section className="sec sec-usp">
        <video className="cover-img" muted autoPlay loop>
          <source src={ArtistBg} type="video/mp4" />
          <source src={ArtistBg} type="video/ogg" />
        </video>

        <Container>
          <Row>
            <Col md={7} className="mx-auto">
              <div className="sec-head text-center">
                <h2 className="sec-title my-md-5 my-4">
                  Every beat, every lyric, every note deserves its stage.
                </h2>
              </div>
            </Col>
          </Row>

          <Row className="g-md-4 g-2 my-md-5 pb-5 text-md-start text-center">
            <Col xs={4}>
              <div className="card-usp rounded-4 p-md-4 p-3 h-100">
                <h4 className="mb-1">1000+ Projects</h4>
                <p className="m-0 text-large">entries from across India</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className="card-usp rounded-4 p-md-4 p-3 h-100">
                <h4 className="mb-1">100+ Hours</h4>
                <p className="m-0 text-large">
                  of mentorship with leading experts
                </p>
              </div>
            </Col>
            <Col xs={4}>
              <div className="card-usp rounded-4 p-md-4 p-3 h-100">
                <h4 className="mb-1">25+ Original songs</h4>
                <p className="m-0 text-large">
                  in Year 1 with Digital Releases
                </p>
              </div>
            </Col>
          </Row>

          <a href="/participate" className="btn-circle">
            Participate <br />
            Now
          </a>
        </Container>
      </section>
    </>
  );
}

export default ArtistUsp;
