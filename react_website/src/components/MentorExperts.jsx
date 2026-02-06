import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import arrowLeft from "../assets/nav-arrow-left.svg";
import arrowRight from "../assets/nav-arrow-right.svg";
import { Container, Image, Row, Col } from "react-bootstrap";
import MentorModal from "./MentorModal";
import { mentorList } from "../api";

import "swiper/css";
import "swiper/css/navigation";

function MentorExperts({ data }) {
  const [current, setCurrent] = useState(1);
  const [show, setShow] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [mentors, setMentors] = useState([]);
  const [total, setTotal] = useState(0);

  const openModal = (mentor) => {
    setSelectedMentor(mentor);
    setShow(true);
  };

  const closeModal = () => setShow(false);

  const getMentorList = async () => {
    let mentorRes = await mentorList();
    if (mentorRes?.data) {
      setMentors(mentorRes.data);
    }
  };

  useEffect(() => {
    getMentorList();
  }, []);

  // Update total and reset slide count when mentors load
  useEffect(() => {
    setTotal(mentors.length);
    setCurrent(1);
  }, [mentors]);

  let remark = data?.remark
    ?.replace(/<(.|\n)*?>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();

  return (
    <>
      <section className="sec sec-mentor sec-slider" id="mentors">
        <Container>
          <div className="sec-head text-center mb-5">
            {data?.title && <p className="sec-sub-title mb-2">{data.title}</p>}
            {data?.subtitle && (
              <h2 className="sec-title mb-5">{data.subtitle}</h2>
            )}
            {remark && (
              <div dangerouslySetInnerHTML={{ __html: data.remark }} />
            )}
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            loop={false}
            navigation={{
              prevEl: ".sec-mentor #prevBtn",
              nextEl: ".sec-mentor #nextBtn",
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
            {mentors.map((mentor) => (
              <SwiperSlide key={mentor.id}>
                <div
                  className="mentor-card text-center cursor-pointer"
                  onClick={() => openModal(mentor)}
                >
                  <Image src={mentor.image} alt="" />
                  <div className="mentor-card-title text-center">
                    <h4 className="font-secondary">{mentor.name}</h4>
                    <p className="m-0 text-large">{mentor.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation + Counter */}
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

          <Row className="align-items-center justify-content-center">
            {mentors.map((mentor) => (
              <Col xs={6} md={3} key={mentor.id}></Col>
            ))}
          </Row>
        </Container>
      </section>

      <MentorModal
        show={show}
        handleClose={closeModal}
        mentor={selectedMentor}
      />
    </>
  );
}

export default MentorExperts;
