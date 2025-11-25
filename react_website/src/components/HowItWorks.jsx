import { Container, Image, Row, Col } from "react-bootstrap";
import stageOne from "../assets/stage-icon-1.svg";
import stageTwo from "../assets/stage-icon-2.svg";
import stageThree from "../assets/stage-icon-3.svg";
import stageFour from "../assets/stage-icon-4.svg";
import stageFive from "../assets/stage-icon-5.svg";

function HowItWorks() {
  return (
    <>
      <section className="sec sec-process" id="aboutmYOUsic">
        <Container>
          <Row>
            <Col md={7} className="mx-auto">
              <div className="sec-head text-center mb-5">
                <p className="sec-sub-title mb-2">What is Havells mYOUsic?</p>
                <h2 className="sec-title mb-5">
                  A Journey That Celebrates India’s True Music Spirit
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="text-justify justify-content-center text-center text-large">
            <Col lg={8}>
              <p>
                India’s music is a living, breathing story-woven through folk
                melodies in villages, timeless classical ragas, vibrant film
                scores, and the raw rhythms of its streets. Havells mYOUsic is
                the stage where these voices unite.
              </p>
              <p>
                This platform is designed to discover and nurture grassroots
                talent-singers, lyricists, composers, and
                instrumentalists-giving them the stage they deserve. Through
                mentorship from industry legends, immersive bootcamps, and
                opportunities to create original music, Havells mYOUsic is more
                than a program-it’s a movement to amplify India’s authentic
                sound and empower the artists behind it.
              </p>
            </Col>
          </Row>
          <Row className="g-md-4 g-3 step mt-md-5 mt-4 justify-content-md-start justify-content-center">
            <Col md xs={6} className="step-item">
              <div className="step-card">
                <div className="step-card-text">
                  <Image src={stageOne} className="mb-lg-4 m-2" alt="" />
                  <span>Stage 1</span>
                  <span className="font-secondary fs-4 fw-bold">Apply</span>
                </div>
              </div>
            </Col>
            <Col md xs={6} className="step-item">
              <div className="step-card">
                <div className="step-card-text">
                  <Image src={stageTwo} className="mb-lg-4 m-2" alt="" />
                  <span>Stage 2</span>
                  <span className="font-secondary fs-4 fw-bold">Audition</span>
                </div>
              </div>
            </Col>
            <Col md xs={6} className="step-item">
              <div className="step-card">
                <div className="step-card-text">
                  <Image src={stageThree} className="mb-lg-4 m-2" alt="" />
                  <span>Stage 3</span>
                  <span className="font-secondary fs-4 fw-bold">
                    Membership Bootcamp
                  </span>
                </div>
              </div>
            </Col>
            <Col md xs={6} className="step-item">
              <div className="step-card">
                <div className="step-card-text">
                  <Image src={stageFour} className="mb-lg-4 m-2" alt="" />
                  <span>Stage 4</span>
                  <span className="font-secondary fs-4 fw-bold">
                    Collaborate
                  </span>
                </div>
              </div>
            </Col>
            <Col md xs={6} className="step-item">
              <div className="step-card">
                <div className="step-card-text">
                  <Image src={stageFive} className="mb-lg-4 m-2" alt="" />
                  <span>Stage 5</span>
                  <span className="font-secondary fs-4 fw-bold">Release</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HowItWorks;
