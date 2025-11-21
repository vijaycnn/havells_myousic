import { Container, Image, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import mohan from "../assets/mohan-nadar.jpg";
import neha from "../assets/neha-sharma.jpg";
import nehal from "../assets/nehal-singh.jpg";
import miguel from "../assets/miguel-dsouza.jpg";
import daulat from "../assets/daulat-singh.jpg";
import namita from "../assets/namita-gogoi.jpg";
import ritika from "../assets/ritika-reddy.jpg";

function HeroBanner() {
  return (
    <>
      <section className="sec sec-hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="sec-head">
                <h2 className="sec-title mb-5">
                  Sing, Write, or Compose. This Stage Is Yours
                </h2>
                <p className="sec-sub-title mb-5">
                  A platform that helps new voices, songwriters, and composers
                  from every corner of India to showcase their talent and get
                  noticed
                </p>
                <a href="#" className="btn btn-primary btn-lg rounded-pill">
                  <span>See How it Works</span>
                </a>
              </div>
            </Col>
            <Col md={6}>
              <div className="artist-slider slider-wrapper">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={2}
                  speed={800}
                  loop={true}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 1200,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[EffectCoverflow, Autoplay]}
                  className="coverflow-swiper"
                >
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image src={nehal} alt="Singer" />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Singer
                      </h4>
                      {/* <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>New Delhi</span>
                        <span>|</span>
                        <span>Singer</span>
                      </div> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image src={ritika} alt="Music Composer" />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Music Composer
                      </h4>
                      {/* <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>Telangana</span>
                        <span>|</span>
                        <span>Music Composer</span>
                      </div> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image src={daulat} alt="Kamaicha" />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Kamaicha
                      </h4>
                      {/* <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>Rajasthan</span>
                        <span>|</span>
                        <span>Kamaicha</span>
                      </div> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image src={neha} alt="Lyricist" />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Lyricist
                      </h4>
                      {/* <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>Haryana</span>
                        <span>|</span>
                        <span>Lyricist</span>
                      </div> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image src={namita} alt="guitarist" />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Guitarist
                      </h4>
                      {/* <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>Assam</span>
                        <span>|</span>
                        <span>Guitar</span>
                      </div> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image src={miguel} alt="Violin" />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Violin
                      </h4>
                      {/* <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>Goa</span>
                        <span>|</span>
                        <span>Violin</span>
                      </div> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image src={mohan} alt="Tabla Maestro" />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Tabla Maestro
                      </h4>
                      {/* <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>Tamil Nadu</span>
                        <span>|</span>
                        <span>Tabla Maestro</span>
                      </div> */}
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HeroBanner;
