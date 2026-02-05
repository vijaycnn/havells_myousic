import { Container, Image, Row, Col } from "react-bootstrap";
import bootcampImage from "../assets/bootcamp-video-thumb.jpg";

function Bootcamp( {data, bg}) {
  let remark = data?.remark
    .replace(/<(.|\n)*?>/g, '') // remove html tags
    .replace(/&nbsp;/g, ' ')
    .trim();
  return (
    <>
      <section className="sec sec-bootcamp" id="bootcamps">
        <Container>
          <div className="artist-video">
            {/* <Image src={bootcampImage} alt="" /> */}
            {
              (bg?.filePath) ?
              <>
              <Image src={bg.filePath} alt="" />
              </>:''
            }
            <div className="artist-video-text text-center justify-content-center align-items-center">
              {/* <a href="#" className="artist-video-play">
                &nbsp;
              </a> */}
              {
                (data?.title)?
                <>
                <p className="sec-sub-title mb-0">
                {/* Bootcamps &amp; Events */}
                {data?.title} </p>
                </>:''
              }
              {
                (data?.subtitle) ?
                <>
                  <h2 className="sec-title font-secondary">
                    {data?.subtitle}
                  </h2>
                </>: ''
              }
              <Row>
                <Col md={8} className="mx-auto fs-5">
                  {
                    (data?.remark && remark.length > 0)?
                    <>
                    <div dangerouslySetInnerHTML={{ __html: data?.remark || "" }} />
                    </>:''
                  }
                    {/* Selected talent will step into an intensive 3-day bootcamp-a
                    power-packed journey to transform passion into performance.
                  </p> */}
                </Col>
              </Row>
              <span className="notes rounded-pill text-black px-md-5 px-4 py-3">
                Note: Workshops and bootcamps are exclusively for shortlisted
                participants.
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Bootcamp;
