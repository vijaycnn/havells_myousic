import { Container, Image, Row, Col, Nav } from "react-bootstrap";
import Logo from "../assets/logo.svg";
import FbIcon from "../assets/fb-icon.svg";
import TwitterIcon from "../assets/tw-icon.svg";
import InstaIcon from "../assets/insta-icon.svg";
import YtubeIcon from "../assets/yt-icon.svg";

function Footer() {
  return (
    <>
      <footer className="app-footer">
        <Container>
          <div className="app-footer-strip d-flex d-flex justify-content-between pb-3 mb-5 align-items-center">
            <h2>Every beat, every lyric, every note deserves its stage.</h2>
            <a
              href="/participate"
              className="btn btn-lg btn-primary rounded-pill"
            >
              <span>Participate Now</span>
            </a>
          </div>
          <Row>
            <Col md={3}>
              <a href="/">
                <Image src={Logo} alt="" />
              </a>
              <h4 className="app-footer-title mt-5 mb-4">Follow us</h4>
              <div className="app-footer-social d-flex gap-4 align-items-center">
                <a href="#">
                  <Image src={FbIcon} alt="Facebook" />
                </a>
                <a href="#">
                  <Image src={TwitterIcon} alt="Twitter" />
                </a>
                <a href="#">
                  <Image src={InstaIcon} alt="Instagram" />
                </a>
                <a href="#">
                  <Image src={YtubeIcon} alt="YouTube" />
                </a>
              </div>
            </Col>
            <Col md={9}>
              <Row>
                <Col md={4}>
                  <h4 className="app-footer-title">Brand</h4>
                  <Nav as="ul" className="flex-column">
                    <Nav.Item as="li">
                      <Nav.Link href="/#aboutmYOUsic">
                        About Havells mYOUsic
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="/#aboutmYOUsic">How it Works</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="/#FAQs">FAQs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Contact Us</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={4}>
                  <h4 className="app-footer-title">For Artist</h4>
                  <Nav as="ul" className="flex-column">
                    <Nav.Item as="li">
                      <Nav.Link href="/#bootcamps">
                        Programs & Bootcamps
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Auditions & Submissions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="/#mentors">Mentors & Experts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="/#stories">Success Stories</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Participation Rules</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={4}>
                  <h4 className="app-footer-title">Partnership &amp; Legal</h4>
                  <Nav as="ul" className="flex-column">
                    <Nav.Item as="li">
                      <Nav.Link href="#">
                        Partner with Us (brands/sponsors)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Terms of Use</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Privacy Policy</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Copyright & Content Policy</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
            </Col>
          </Row>

          <div className="copyright fs-small text-muted text-center mt-5">
            &copy; 2025 Havells mYOUsic. All rights reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
