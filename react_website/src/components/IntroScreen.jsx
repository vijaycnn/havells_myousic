import { Container, Image, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";

function IntroScreen() {
  return (
    <>
      <section className="sec-intro">
        <div class="scrolling-bg"></div>
        <div className="circle-content">
          <h5 className="font-secondary">Introducing</h5>
          <Image src={logo} alt="" className="circle-logo" />

          <div className="circle-content-text text-center mt-4">
            <p className="fw-bold text-large">
              From Gully Beats to Ghazals. All Find a Home Here.
            </p>
            <p className="circle-text">
              Havells mYOUsic brings together India’s diverse sounds and
              stories. A place for every artist - from local stages to digital
              screens - to be seen, heard, and celebrated.
            </p>
          </div>
          <a href="#" className="btn rounded-pill btn-outline-secondary">
            Enter Website
          </a>
        </div>
      </section>
    </>
  );
}

export default IntroScreen;
