import { Container, Image, Row, Col } from "react-bootstrap";
import bootcampImage from "../assets/bootcamp-video-thumb.jpg";

function Bootcamp() {
  return (
    <>
      <section className="sec sec-bootcamp">
        <Container>
          <div className="artist-video">
            <Image src={bootcampImage} alt="" />
            <div className="artist-video-text text-center justify-content-center align-items-center">
              {/* <a href="#" className="artist-video-play">
                &nbsp;
              </a> */}
              <p className="sec-sub-title mb-0">Bootcamps &amp; Events</p>
              <h2 className="sec-title font-secondary">
                Learn.Collabrate.Perform.
              </h2>
              <Row>
                <Col md={8} className="mx-auto fs-5">
                  <p>
                    Selected talent will be invited to an intensive 3-day
                    bootcamp - a crash course in turning passion into
                    performance.
                  </p>
                </Col>
              </Row>
              <span className="notes rounded-pill text-black px-5 py-3">
                Note: Workshops/bootcamps are exclusively for shortlisted
                participants.
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Bootcamp;
