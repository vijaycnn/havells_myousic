import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "react-bootstrap";
import { Navigation } from "swiper/modules";
import arrowLeft from "../assets/nav-arrow-left.svg";
import arrowRight from "../assets/nav-arrow-right.svg";

import "swiper/css";
import "swiper/css/navigation";

export default function VideoSlider() {
  const slides = Array.from({ length: 10 }, (_, i) => i + 1);
  const total = slides.length;

  const [current, setCurrent] = useState(1);

  return (
    <section className="sec sec-slider">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4.5}
        loop={true}
        navigation={{
          prevEl: "#prevBtn",
          nextEl: "#nextBtn",
        }}
        onSlideChange={(swiper) => setCurrent(swiper.activeIndex + 1)}
      >
        {slides.map((item) => (
          <SwiperSlide key={item}>
            <div className="artist-video">
              <a
                href="#"
                className="artist-video-text text-center justify-content-center align-items-center"
              >
                <span className="artist-video-play">&nbsp;</span>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-nav d-flex flex-column align-items-center mt-4">
        <div className="swiper-nav-fraction">
          <span className="current fs-5 fw-bolder">{current}</span>
          <span className="total text-muted"> / {total}</span>
        </div>
        <div className="d-inline-flex align-items-center">
          <button className="nav-btn prev-btn" id="prevBtn">
            <Image src={arrowLeft} alt="" />
          </button>
          <div className="progress-line">
            <div
              className="progress-fill"
              style={{ width: `${(current / total) * 100}%` }}
            ></div>
          </div>
          <button className="nav-btn next-btn" id="nextBtn">
            <Image src={arrowRight} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
