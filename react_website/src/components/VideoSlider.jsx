import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image, Modal } from "react-bootstrap";
import { Navigation } from "swiper/modules";
import arrowLeft from "../assets/nav-arrow-left.svg";
import arrowRight from "../assets/nav-arrow-right.svg";

import "swiper/css";
import "swiper/css/navigation";

export default function VideoSlider({galleryData}) {
  const slides = galleryData;   //Array.from({ length: 10 }, (_, i) => i + 1);
  const total = slides.length;

  const [current, setCurrent] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [previewMedia, setPreviewMedia] = useState(null);

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
          <SwiperSlide key={item.id}>
            <div className="artist-video"  onClick={() => { setPreviewMedia(item); setShowPreview(true); }} >
              
              <a className="artist-video-text text-center justify-content-center align-items-center" >
                <video src={item.filePath} muted preload="metadata" onMouseEnter={(e) => e.target.play()}
  onMouseLeave={(e) => e.target.pause()}  style={{ objectFit: "cover", borderRadius: "6px" }}
             />
                <span className="artist-video-play" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                  background: "rgba(0,0,0,0.6)", color: "#fff", borderRadius: "50%", padding: "6px 10px", fontSize: "14px",
                }}>&nbsp;</span>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal id="preview" name="preview" show={showPreview} onHide={() => setShowPreview(false)} centered size="lg" >
        <Modal.Header closeButton>
          <Modal.Title>{previewMedia?.title || "Preview"}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          {previewMedia?.type.trim() === "image" ? (
            <img src={previewMedia.filePath} style={{ maxWidth: "100%", borderRadius: "8px" }} />
          ) : (
            <video src={previewMedia?.filePath} controls autoPlay style={{ width: "100%", borderRadius: "8px" }} />
          )}
        </Modal.Body>
      </Modal>

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
