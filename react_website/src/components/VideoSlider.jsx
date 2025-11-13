import { Container, Image, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function VideoSlider() {
  return (
    <>
      <section className="sec sec-slider">
        <Swiper
          spaceBetween={20}
          slidesPerView={4.5}
          navigation
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div className="artist-video">
              <a
                href="#"
                className="artist-video-text text-center justify-content-center align-items-center"
              >
                <Image
                  src="https://www.shutterstock.com/shutterstock/videos/1108636195/thumb/5.jpg"
                  alt=""
                />
                <span className="artist-video-play">&nbsp;</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="artist-video">
              <a
                href="#"
                className="artist-video-text text-center justify-content-center align-items-center"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/3/36/Indian_village_musicians.jpg"
                  alt=""
                />
                <span className="artist-video-play">&nbsp;</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="artist-video">
              <a
                href="#"
                className="artist-video-text text-center justify-content-center align-items-center"
              >
                <span className="artist-video-play">&nbsp;</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="artist-video">
              <a
                href="#"
                className="artist-video-text text-center justify-content-center align-items-center"
              >
                <span className="artist-video-play">&nbsp;</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="artist-video">
              <a
                href="#"
                className="artist-video-text text-center justify-content-center align-items-center"
              >
                <span className="artist-video-play">&nbsp;</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="artist-video">
              <a
                href="#"
                className="artist-video-text text-center justify-content-center align-items-center"
              >
                <span className="artist-video-play">&nbsp;</span>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default VideoSlider;
