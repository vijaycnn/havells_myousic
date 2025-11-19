import { Container, Image, Row, Col, Button } from "react-bootstrap";
import dj from "../assets/dj-speaker.jpg";

function Stories() {
  return (
    <>
      <section className="sec sec-stories" id="stories">
        <Container>
          <header className="sec-head text-center mb-5">
            <p className="sec-sub-title mb-2">Stories &amp; FAQs</p>
            <h2 className="sec-title mb-0">The Sound of Tomorrow</h2>
          </header>
          <Row>
            <Col md={7}>
              <div className="artist-video-wrapper">
                <div className="artist-video">
                  <Image src={dj} alt="" />
                  <div className="artist-video-text">
                    <a href="#" className="artist-video-play">
                      &nbsp;
                    </a>
                    <h2 className="font-secondary">
                      Behind-the-scenes <br />
                      studio jams
                    </h2>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="artist-list d-grid gap-2 mb-4">
                <h3 className="font-secondary mb-4">Indian Soil Artist's</h3>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="artist-item d-flex align-items-center gap-3 rounded-pill p-2"
                  >
                    <div className="artist-avtar">
                      <Image
                        src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </div>
                    <div className="artist-text flex-fill">
                      <h5 className="title fs-large mb-2">Arjun Singh</h5>
                      <div className="d-flex flex-wrap gap-2 place text-small">
                        <span>New Delhi</span> <span>Guitarist</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Row className="justify-content-center">
                <Col md={10} className="text-center d-grid">
                  <h4 className="font-secondary mb-4">
                    We’re always looking for the next big talent
                  </h4>
                  <Button
                    onClick={() => (window.location.href = "/participate")}
                    variant="primary pill"
                    size="lg"
                  >
                    <span>Be the Next Artist Here</span>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Stories;
