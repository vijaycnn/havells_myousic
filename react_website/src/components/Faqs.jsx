import { Container, Tab, Tabs, Image, Row, Col } from "react-bootstrap";
import mike from "../assets/mice.png";
import tabla from "../assets/tabla.png";
import guitar from "../assets/guitar.png";
import arrowDown from "../assets/arrow-down.svg";
import FaqsAbout, { FaqsFees, FaqsGeneral, FaqsProcess } from "./FaqsAccordion";

function FAQs() {
  return (
    <>
      <section className="sec sec-form">
        <Container>
          <div className="artist-card">
            <Image src={mike} alt="Mike" className="artist-card-element mike" />
            <Image
              src={tabla}
              alt="Tabla"
              className="artist-card-element tabla"
            />
            <Image
              src={guitar}
              alt="Guitar"
              className="artist-card-element guitar"
            />
            <div className="sec-head text-center">
              <h2 className="sec-title mb-md-5 mb-4">
                Artist-friendly <br />
                participation rules
              </h2>
              <a href="#" className="btn btn-lg btn-primary rounded-pill">
                <span>
                  <Image src={arrowDown} alt="" /> Download full guidelines
                </span>
              </a>
            </div>
          </div>

          <section className="sec pb-0" id="FAQs">
            <Row className="justify-content-center">
              <Col lg={10}>
                <h2 className="text-center fw-medium mb-md-5 mb-3">
                  Got Questions? We’ve Got Answers
                </h2>

                <Tabs
                  defaultActiveKey="TabOne"
                  className="mb-3 justify-content-md-center"
                >
                  <Tab eventKey="TabOne" title="About Participation">
                    <FaqsAbout />
                  </Tab>
                  <Tab eventKey="TabTwo" title="Application Process">
                    <FaqsProcess />
                  </Tab>
                  <Tab eventKey="TabThree" title="Fees & Eligibility">
                    <FaqsFees />
                  </Tab>
                  <Tab eventKey="TabFour" title="General">
                    <FaqsGeneral />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </section>
        </Container>
      </section>
    </>
  );
}

export default FAQs;
