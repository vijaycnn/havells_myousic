import { Container, Image, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
// import mohan from "../assets/mohan-nadar.jpg";
// import neha from "../assets/neha-sharma.jpg";
// import nehal from "../assets/nehal-singh.jpg";
// import miguel from "../assets/miguel-dsouza.jpg";
// import daulat from "../assets/daulat-singh.jpg";
// import namita from "../assets/namita-gogoi.jpg";
// import ritika from "../assets/ritika-reddy.jpg";
import { bannerList } from "../api";

function HeroBanner({ data }) {
  const [loading, setLoading] = useState(true);
  const [bannerImages, setBannerImages] = useState([]);
      console.log('data>>>', data)
    
  const getBannerList = async () => {
      let bannerRes = await bannerList();
      console.log('>>>', bannerRes)
      if (bannerRes?.data) {
        setBannerImages(bannerRes.data);
        // console.log('it is reached ', bannerRes.data)
      }
    };
  useEffect( () => {
    if (loading) {
      getBannerList();
      setLoading(false)
    }
  }, [loading]);
  return (
    <>
      <section className="sec sec-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="sec-head text-lg-start text-center mb-lg-0 mb-5 px-lg-0 px-md-5">
                <h2 className="sec-title mb-md-5 mb-4" dangerouslySetInnerHTML={{ __html: data?.title || ""}} />
                  {/* Sing. Write. Compose. <br />
                  The stage is yours!
                </h2> */}

                <p className="sec-sub-title mb-md-5 mb-4" dangerouslySetInnerHTML={{ __html: data?.remark || "" }} />
                  {/* <strong>Your art deserves a spotlight. </strong>
                  Havells mYOUsic is a platform for{" "}
                  <strong>grassroots artists-singers, lyricists,
                  composers, and instrumentalists</strong> from every corner of India.
                  This is where raw passion meets real opportunity. Showcase
                  your talent, learn from industry legends, and take your first
                  step toward being heard. */}
                
                <a
                  href="/participate"
                  className="btn btn-primary btn-lg rounded-pill"
                >
                  <span className="default-text">Free Registration</span>
                  <span className="hover-text">Participate Now</span>
                </a>
              </div>
            </Col>
            <Col lg={6}>
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
                    disableOnInteraction: true,
                  }}
                  modules={[EffectCoverflow, Autoplay]}
                  className="coverflow-swiper"
                  breakpoints={{
                    320: { slidesPerView: 1.3 },
                    576: { slidesPerView: 2 },
                  }}
                >
                  {bannerImages.map((banner, index) => (
                  <SwiperSlide key={banner.id} >
                    <div className="card-artist">
                      <div className="card-artist-thumb mb-3">
                        <Image src={banner.image?.trim()} alt={banner.title?.trim()} />
                      </div>
                      <h4 className="font-secondary text-primary text-center">
                        {banner.title?.trim()}
                      </h4>
                      <div className="d-flex gap-3 align-items-center justify-content-center">
                        <span>{banner.description?.trim()}</span>                        
                      </div>
                    </div>
                  </SwiperSlide>
                ))}                  
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
