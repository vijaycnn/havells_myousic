import { Container, Tab, Tabs, Image, Row, Col } from "react-bootstrap";
import mike from "../assets/mice.png";
import tabla from "../assets/tabla.png";
import guitar from "../assets/guitar.png";
import arrowDown from "../assets/arrow-down.svg";
import FaqsAccordion from "./FaqsAccordion";

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
            <header className="sec-head text-center mb-5">
              <h2 className="sec-title mb-5">
                Artist-friendly <br />
                participation rules
              </h2>
              <a href="#" className="btn btn-lg btn-primary rounded-pill">
                <span>
                  <Image src={arrowDown} alt="" /> Download full guidelines
                </span>
              </a>
            </header>
          </div>

          <section className="sec pb-0" id="FAQs">
            <Row className="justify-content-center">
              <Col md={10}>
                <h2 className="text-center fw-medium mb-5">
                  Got Questions? We’ve Got Answers
                </h2>
                <Tabs
                  defaultActiveKey="TabOne"
                  className="mb-3 justify-content-center"
                >
                  <Tab eventKey="TabOne" title="About Participation">
                    <FaqsAccordion />
                  </Tab>
                  <Tab eventKey="TabTwo" title="Application Process">
                    <FaqsAccordion />
                  </Tab>
                  <Tab eventKey="TabThree" title="Fees & Eligibility">
                    <FaqsAccordion />
                  </Tab>
                  <Tab eventKey="TabFour" title="General">
                    <FaqsAccordion />
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
