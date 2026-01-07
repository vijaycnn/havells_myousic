import { Container, Image, Row, Col } from "react-bootstrap";
import QrCode from "../assets/QR-code.png";
import shareIcon from "../assets/share-icon.svg";

function Gallery({data}) {
  let remark = data?.remark
    .replace(/<(.|\n)*?>/g, '') // remove html tags
    .replace(/&nbsp;/g, ' ')
    .trim();
  return (
    <>
      <section className="sec sec-gallery pb-0" id="gallery">
        <Container>
          <div className="sec-head text-center mb-5">
            {
              (data?.title)?
              <>
              <h2 className="sec-title"> {/* Captured Beats. Endless Memories. */}
              {data?.title}
              </h2>
              </>:''
            }
            {
              (data?.subtitle)?
              <>
                <p className="sec-sub-title" >   {/* Experience the essence of Havells mYOUsic through moments that celebrate creativity, passion, and connection. */}
                  {data?.subtitle}
                </p>
              </>:''
            }
            {
              (data?.remark && remark.length > 0)?
              <>
                <div dangerouslySetInnerHTML={{ __html: data?.remark || "" }} />
              </>:''
            }              
          </div>
          <Row className="g-md-4 g-3">
            <Col md={3} xs={6}>
              <div className="gallery-item">
                <Image
                  src="https://img.freepik.com/free-photo/medium-shot-man-performing-stage_23-2149247126.jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="gallery-item">
                <Image
                  src="https://www.careersinmusic.com/wp-content/uploads/2019/03/recording-artist.jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="gallery-item">
                <Image
                  src="https://dnwp63qf32y8i.cloudfront.net/e25550d67ca25f8c7bb95c68b4fab8f6e5e63c4f"
                  alt=""
                />
              </div>
            </Col>
            <Col md={3} xs={6}>
              <div className="gallery-item">
                <Image
                  src="https://himanshunanda.com/wp-content/uploads/2020/12/Why-you-should-learn-the-bansuri.webp"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Gallery;
