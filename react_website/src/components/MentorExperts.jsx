import { Container, Tab, Tabs, Image, Row, Col, Button } from "react-bootstrap";
import Meiyang from "../assets/Meiyang-Chang.png";
import SonuNigam from "../assets/Sonu-NIgam.png";
import Shreya from "../assets/Shreya-Ghoswal.png";
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
          <Row className="align-items-center">
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <div className="mentor-card text-center">
                    <Image src={Meiyang} alt="" />
                    <div className="mentor-card-title text-center">
                      <h4 className="font-secondary">Meiyang-Chang</h4>
                      <p className="m-0 text-large">Music Entrepreneur</p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="mentor-card text-center">
                    <Image src={SonuNigam} alt="" />
                    <div className="mentor-card-title text-center">
                      <h4 className="font-secondary">Sonu Nigam</h4>
                      <p className="m-0 text-large">Music Mentor</p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="mentor-card text-center">
                    <Image src={Shreya} alt="" />
                    <div className="mentor-card-title text-center">
                      <h4 className="font-secondary">Shreya Ghoshal</h4>
                      <p className="m-0 text-large">Bollywood Composer</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default MentorExperts;
