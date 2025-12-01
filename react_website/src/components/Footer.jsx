import { Container, Image, Row, Col, Nav } from "react-bootstrap";
import Logo from "../assets/logo.svg";
import FbIcon from "../assets/fb-icon.svg";
import Linkedin from "../assets/linked-icon.svg";
import InstaIcon from "../assets/insta-icon.svg";
import YtubeIcon from "../assets/yt-icon.svg";

function Footer() {
  return (
    <>
      <footer className="app-footer">
        <Container>
          <div className="app-footer-strip d-flex flex-md-row flex-column text-md-start text-center d-flex justify-content-between pb-3 mb-5 align-items-center gap-4">
            <h2>Every beat, every lyric, every note deserves its stage.</h2>
            <div className="flex-fill">
              <a
                href="/participate"
                className="btn btn-lg btn-primary rounded-pill"
              >
                <span className="default-text">Free Registration</span>
                <span className="hover-text">Participate Now</span>
              </a>
            </div>
          </div>
          <Row>
            <Col md={4} className="pe-lg-5">
              <a href="/">
                <Image src={Logo} alt="" />
              </a>
              <p className="my-4">
                A Havells initiative committed to discovering and nurturing
                grassroots musical talent across India-empowering emerging
                artists to build skills, gain exposure, and create original
                music with guidance from expert mentors.
              </p>
              <h4 className="app-footer-title mb-4">Follow us</h4>
              <div className="app-footer-social d-flex gap-4 align-items-center mb-md-0 mb-5">
                <a
                  href="https://www.facebook.com/profile.php?id=61581173831849"
                  target="_blank"
                >
                  <Image src={FbIcon} alt="Facebook" />
                </a>
                {/* <a href="#">
                  <Image src={Linkedin} alt="Linkedin" />
                </a> */}
                <a
                  href="https://www.instagram.com/havellsmyousic/"
                  target="_blank"
                >
                  <Image src={InstaIcon} alt="Instagram" />
                </a>
                <a
                  href="https://www.youtube.com/@HavellsMyousic"
                  target="_blank"
                >
                  <Image src={YtubeIcon} alt="YouTube" />
                </a>
              </div>
            </Col>
            <Col md={8}>
              <Row>
                <Col md={6} lg={7}>
                  <h4 className="app-footer-title">Quick Links</h4>
                  <Row>
                    <Col xs={6}>
                      <Nav as="ul" className="flex-column">
                        <Nav.Item as="li">
                          <Nav.Link href="/#aboutmYOUsic">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link href="/#gallery">The Journey</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link href="/#mentors">
                            Mentors & Experts
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link href="#bootcamps">Bootcamp</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link href="/participate">Apply</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col xs={6}>
                      <Nav as="ul" className="flex-column">
                        <Nav.Item as="li">
                          <Nav.Link href="/#FAQs">FAQs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link href="/terms-conditions">
                            Terms & Conditions
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link href="privacy-policy">
                            Privacy Policy
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link href="/disclaimer">Disclaimer</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} lg={5} className="mt-md-0 mt-4">
                  <h4 className="app-footer-title">Contact</h4>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex flex-column gap-1">
                      <span className="opacity-75">For general queries:</span>
                      <a
                        className="fs-6 fw-semi-bold"
                        href="mailto:myousichavells@gmail.com"
                      >
                        myousichavells@gmail.com
                      </a>
                    </div>
                    {/* <div className="d-flex flex-column gap-1">
                      <span className="opacity-75">For media & press:</span>
                      <a
                        className="fs-6 fw-semi-bold"
                        href="mailto:media@myousic.havells.com"
                      >
                        media@myousic.havells.com
                      </a>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <span className="opacity-75">For partnerships:</span>
                      <a
                        className="fs-6 fw-semi-bold"
                        href="mailto:partnerships@myousic.havells.com"
                      >
                        partnerships@myousic.havells.com
                      </a>
                    </div> */}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <div className="copyright fs-small text-muted text-center mt-5">
            &copy; Havells India Ltd. All rights reserved.
            <br />
            <br />
            All content, submissions, and materials may be used by Havells
            mYOUsic for program-related and promotional purposes, subject to
            terms and policies.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
