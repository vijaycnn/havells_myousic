import { Container, Image, Row, Col } from "react-bootstrap";
import ArtistBg from "../assets/collabrate.mp4";

function ArtistUsp( {data1, data2, data3}) {
  return (
    <>
      <section className="sec sec-usp">
        <video className="cover-img" muted autoPlay loop>
          <source src={ArtistBg} type="video/mp4" />
          <source src={ArtistBg} type="video/ogg" />
        </video>

        <Container>
          <Row>
            <Col md={7} className="mx-auto">
              <div className="sec-head text-center">
                <h2 className="sec-title my-md-5 my-4">
                  Every beat, every lyric, every note deserves its stage.
                </h2>
              </div>
            </Col>
          </Row>

          <Row className="g-md-4 g-2 my-md-5 pb-5 text-md-start text-center">
            <Col xs={4}>
              <div className="card-usp rounded-4 p-md-4 p-3 h-100">
                <h4 className="mb-1"  dangerouslySetInnerHTML={{ __html: data1?.title || "" }} />
                {/* 500+ Entries</h4> */}
                <p className="m-0 text-large" dangerouslySetInnerHTML={{ __html: data1?.remark || "" }} />
                  {/* of Grassroot artists received so far
                </p> */}
              </div>
            </Col>
            <Col xs={4}>
              <div className="card-usp rounded-4 p-md-4 p-3 h-100">
                <h4 className="mb-1" dangerouslySetInnerHTML={{ __html: data2?.title || "" }} />
                {/* 100+ Hours</h4> */}
                <p className="m-0 text-large" dangerouslySetInnerHTML={{ __html: data2?.remark || "" }} />
                  {/* of mentorship from leading industry experts
                </p> */}
              </div>
            </Col>
            <Col xs={4}>
              <div className="card-usp rounded-4 p-md-4 p-3 h-100">
                <h4 className="mb-1" dangerouslySetInnerHTML={{ __html: data3?.title || "" }} />
                {/* 25+ Original songs</h4> */}
                <p className="m-0 text-large" dangerouslySetInnerHTML={{ __html: data3?.remark || "" }} />
                {/* to be released</p> */}
              </div>
            </Col>
          </Row>

          <a href="/participate" className="btn-circle">
            Participate <br />
            Now
          </a>
        </Container>
      </section>
    </>
  );
}

export default ArtistUsp;
