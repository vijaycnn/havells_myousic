import { Container, Image, Row, Col } from "react-bootstrap";
import animatedBanner from "../assets/hero-animation.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

function HeroBanner() {
  return (
    <>
      <section className="sec sec-hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="sec-head">
                <h2 className="sec-title mb-5">
                  Sing, Write, or Compose This Stage Is Yours.
                </h2>
                <p className="sec-sub-title mb-5">
                  A platform that helps new voices, songwriters, and composers
                  from every corner of India to showcase their talent and get
                  noticed.
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
                        <Image
                          src="https://www.careersinmusic.com/wp-content/uploads/2019/03/recording-artist.jpg"
                          alt=""
                        />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Nehal Singh
                      </h4>
                      <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>New Delhi</span>
                        <span>|</span>
                        <span>Single</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image
                          src="https://www.careersinmusic.com/wp-content/uploads/2019/03/recording-artist.jpg"
                          alt=""
                        />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Ritika Reddy
                      </h4>
                      <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>Telangana</span>
                        <span>|</span>
                        <span>Music Composer</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image
                          src="https://m.media-amazon.com/images/M/MV5BZDQxZDNkMTQtMmEyMi00NTg0LTgzYzktZDgwMDQ4ZThlYTg2XkEyXkFqcGc@._V1_.jpg"
                          alt=""
                        />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Daulat Singh
                      </h4>
                      <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>Rajasthan</span>
                        <span>|</span>
                        <span>Kamaicha</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image
                          src="https://dnwp63qf32y8i.cloudfront.net/e25550d67ca25f8c7bb95c68b4fab8f6e5e63c4f"
                          alt=""
                        />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Nisha Sharma
                      </h4>
                      <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>Haryana</span>
                        <span>|</span>
                        <span>Lyrics Writter</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image
                          src="https://dnwp63qf32y8i.cloudfront.net/e25550d67ca25f8c7bb95c68b4fab8f6e5e63c4f"
                          alt=""
                        />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Nimita Gogoi
                      </h4>
                      <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>Assam</span>
                        <span>|</span>
                        <span>Guitar</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image
                          src="https://dnwp63qf32y8i.cloudfront.net/e25550d67ca25f8c7bb95c68b4fab8f6e5e63c4f"
                          alt=""
                        />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Miguel D'Souza
                      </h4>
                      <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>Goa</span>
                        <span>|</span>
                        <span>Voilin</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image
                          src="https://dnwp63qf32y8i.cloudfront.net/e25550d67ca25f8c7bb95c68b4fab8f6e5e63c4f"
                          alt=""
                        />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        Mohan Nadar
                      </h4>
                      <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>Tamil Nadu</span>
                        <span>|</span>
                        <span>Tabla Maestro</span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* <Image src={animatedBanner} alt="" /> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HeroBanner;
