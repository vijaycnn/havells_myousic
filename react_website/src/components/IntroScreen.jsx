import { Image, Button } from "react-bootstrap";
import logo from "../assets/logo.svg";

function IntroScreen({ onEnter }) {
  return (
    <>
      <section className="sec-intro">
        <div className="scrolling-bg"></div>
        <div className="circle-content">
          <h5 className="font-secondary">Introducing</h5>
          <Image src={logo} alt="" className="circle-logo" />

          <div className="circle-content-text text-center mt-4">
            <p className="fw-bold text-large">
              From Gully Beats to Ghazals. All Find a Home Here.
            </p>
            <p className="circle-text">
              Havells mYOUsic brings together India’s diverse creators-singers,
              lyricists, instrumentalists, and music composers-a place for every
              grassroot artist, from local stages to digital screens, to be
              seen, heard, and celebrated.
            </p>
          </div>
          <Button variant="primary rounded-pill" size="lg" onClick={onEnter}>
            <span>Enter Website</span>
          </Button>
        </div>
      </section>
    </>
  );
}

export default IntroScreen;
