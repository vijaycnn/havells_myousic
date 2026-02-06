import { useState, useEffect } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import arrowLeft from "../assets/nav-arrow-left.svg";
import arrowRight from "../assets/nav-arrow-right.svg";
import "swiper/css";
import "swiper/css/navigation";

function Gallery({ data, galleryData }) {
  const [current, setCurrent] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [total, setTotal] = useState(0);

  // Load gallery images into photos state
  useEffect(() => {
    if (galleryData && galleryData.length > 0) {
      setPhotos(galleryData);
    }
  }, [galleryData]);

  // Update total when photos change
  useEffect(() => {
    setTotal(photos.length);
    setCurrent(1);
  }, [photos]);

  let remark = data?.remark
    .replace(/<(.|\n)*?>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
  return (
    <>
      <section className="sec sec-gallery sec-slider" id="gallery">
        <Container>
          <div className="sec-head text-center mb-5">
            {data?.title ? (
              <>
                <h2 className="sec-title">
                  {" "}
                  {/* Captured Beats. Endless Memories. */}
                  {data?.title}
                </h2>
              </>
            ) : (
              ""
            )}
            {data?.subtitle ? (
              <>
                <p className="sec-sub-title">
                  {" "}
                  {/* Experience the essence of Havells mYOUsic through moments that celebrate creativity, passion, and connection. */}
                  {data?.subtitle}
                </p>
              </>
            ) : (
              ""
            )}
            {data?.remark && remark.length > 0 ? (
              <>
                <div dangerouslySetInnerHTML={{ __html: data?.remark || "" }} />
              </>
            ) : (
              ""
            )}
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            loop={false}
            navigation={{
              prevEl: "#prevBtn",
              nextEl: "#nextBtn",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1199: {
                slidesPerView: 4,
              },
            }}
            onSlideChange={(swiper) => setCurrent(swiper.activeIndex + 1)}
          >
            {photos.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="gallery-item">
                  <Image src={item.filePath} alt="ImgGallery" />
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
                  style={{
                    width: total > 0 ? `${(current / total) * 100}%` : "0%",
                  }}
                ></div>
              </div>

              <button className="nav-btn next-btn" id="nextBtn">
                <Image src={arrowRight} alt="" />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Gallery;
