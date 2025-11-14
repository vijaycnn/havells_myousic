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
                <p className="sec-sub-title mb-2">
                  India’s music is full of soul - from folk songs in villages to
                  classical ragas, from film music to street rhythms. Havells
                  mYOUsic brings all this together on one stage.
                </p>
              </div>
            </Col>
          </Row>

          <div className="step d-flex gap-4">
            <div className="step-card">
              <div className="step-card-text">
                <Image src={stageOne} className="mb-4" alt="" />
                <span>Stage 1</span>
                <span className="font-secondary fs-4 fw-bold">Apply</span>
              </div>
            </div>
            <div className="step-card">
              <div className="step-card-text">
                <Image src={stageTwo} className="mb-4" alt="" />
                <span>Stage 2</span>
                <span className="font-secondary fs-4 fw-bold">Audition</span>
              </div>
            </div>
            <div className="step-card">
              <div className="step-card-text">
                <Image src={stageThree} className="mb-4" alt="" />
                <span>Stage 3</span>
                <span className="font-secondary fs-4 fw-bold">
                  Membership Bootcamp
                </span>
              </div>
            </div>
            <div className="step-card">
              <div className="step-card-text">
                <Image src={stageFour} className="mb-4" alt="" />
                <span>Stage 4</span>
                <span className="font-secondary fs-4 fw-bold">Collabrate</span>
              </div>
            </div>
            <div className="step-card">
              <div className="step-card-text">
                <Image src={stageFive} className="mb-4" alt="" />
                <span>Stage 5</span>
                <span className="font-secondary fs-4 fw-bold">Release</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default HowItWorks;
