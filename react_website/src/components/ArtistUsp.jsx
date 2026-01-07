import { Container, Image, Row, Col } from "react-bootstrap";
import ArtistBg from "../assets/collabrate.mp4";

function ArtistUsp( {data1, data2, data3}) {
  let remark1 = data1?.remark
    .replace(/<(.|\n)*?>/g, '') // remove html tags
    .replace(/&nbsp;/g, ' ')
    .trim();
  let remark2 = data2?.remark
    .replace(/<(.|\n)*?>/g, '') // remove html tags
    .replace(/&nbsp;/g, ' ')
    .trim();
  let remark3 = data3?.remark
    .replace(/<(.|\n)*?>/g, '') // remove html tags
    .replace(/&nbsp;/g, ' ')
    .trim();    

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
              <div className="card-usp rounded-4 p-md-4 p-3 h-100" > 
                {
                  (data1?.title)?
                  <>
                  <h4 className="mb-1">   {/* 500+ Entries */}
                  {data1?.title}
                  </h4>
                  </>: ''
                }
                {
                  (data1?.subtitle)?
                  <>
                  <p className="m-0 text-large">{data1?.subtitle}</p>
                  </>:''
                }
                {
                  (data1?.remark && remark1.length > 0)?
                  <>
                  <div dangerouslySetInnerHTML={{ __html: data1?.remark || "" }} />
                  </>:''
                }
              </div>
            </Col>
            <Col xs={4}>
              <div className="card-usp rounded-4 p-md-4 p-3 h-100">
                {
                  (data2?.title)?
                  <>
                  <h4 className="mb-1">   {/* 500+ Entries */}
                  {data2?.title}
                  </h4>
                  </>: ''
                }
                {
                  (data2?.subtitle)?
                  <>
                  <p className="m-0 text-large">{data2?.subtitle}</p>
                  </>:''
                }
                {
                  (data2?.remark && remark2.length > 0)?
                  <>
                  <div dangerouslySetInnerHTML={{ __html: data2?.remark || "" }} />
                  </>:''
                }
              </div>
            </Col>
            <Col xs={4}>
              <div className="card-usp rounded-4 p-md-4 p-3 h-100">
                {
                  (data3?.title)?
                  <>
                  <h4 className="mb-1">   {/* 500+ Entries */}
                  {data3?.title}
                  </h4>
                  </>: ''
                }
                {
                  (data3?.subtitle)?
                  <>
                  <p className="m-0 text-large">{data3?.subtitle}</p>
                  </>:''
                }
                {
                  (data3?.remark && remark3.length > 0)?
                  <>
                  <div dangerouslySetInnerHTML={{ __html: data3?.remark || "" }} />
                  </>:''
                }
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
