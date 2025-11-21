import { Container, Image, Row, Col } from "react-bootstrap";
import AtulChuramani from "../assets/Atul-Churamani.png";
import Tarsame from "../assets/Tarsame.png";
import GoldStar from "../assets/gold-star.svg";
import Arijit from "../assets/arijit.jpg";

function MentorExperts() {
  return (
    <>
      <section className="sec sec-mentor" id="mentors">
        <Container fluid>
          <div className="sec-head text-center mb-5">
            <p className="sec-sub-title mb-2">Mentors &amp; Experts</p>
            <h2 className="sec-title mb-5">Guided by the Best</h2>
          </div>
          <Row className="align-items-center justify-content-center">
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <div className="mentor-card text-center">
                    <Image src={Tarsame} alt="" />
                    <div className="mentor-card-title text-center">
                      <h4 className="font-secondary">Tarsame Mittal</h4>
                      <p className="m-0 text-large">Music Entrepreneur</p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mentor-card text-center">
                    <Image src={AtulChuramani} alt="" />
                    <div className="mentor-card-title text-center">
                      <h4 className="font-secondary">Atul Churamani</h4>
                      <p className="m-0 text-large">
                        Music and Publishing Veteran
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* <Col md={4}>
              <div className="card-expert d-flex flex-column gap-4 rounded-5 p-5">
                <div className="badge-weekly text-center fw-semi-bold rounded-pill p-3 fs-6">
                  Weekly Guest Mentor
                </div>
                <p className="fw-medium opacity-75 text-large">
                  Each week, a celebrated artist or mentor steps in with new
                  lessons, perspectives, and stories to fuel your journey.
                </p>
                <div className="badge-coming d-flex align-items-center gap-2 justify-content-center text-center fw-semi-bold rounded-pill p-3 fs-6 text-white">
                  <Image src={GoldStar} alt="" />
                  Coming Week
                </div>

                <div className="singer d-flex gap-3 align-items-center">
                  <div className="singer-avtar">
                    <Image src={Arijit} alt="" />
                  </div>
                  <div className="singer-text">
                    <h5>Arijit Singh</h5>
                    <span className="text-muted">Singer</span>
                  </div>
                </div>
                
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default MentorExperts;
