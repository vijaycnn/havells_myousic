import { Container, Tab, Tabs, Image, Row, Col, Accordion } from "react-bootstrap";
import { useState, useEffect } from "react";
import mike from "../assets/mice.png";
import tabla from "../assets/tabla.png";
import guitar from "../assets/guitar.png";
import arrowDown from "../assets/arrow-down.svg";
import guidelines from "../assets/participant-guidelines-terms-conditions.pdf";
import FaqsAbout, { FaqsFees, FaqsGeneral, FaqsProcess } from "./FaqsAccordion";
import { faqList } from "../api";

function FAQs() {
    const [loading, setLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);
    // const [defaultTab, setDefaultTab] = useState(null);
    const [faqs, setFaqs] = useState([]);
    const getFaqList = async () => {
        let faqRes = await faqList();
        // console.log('>>>', faqRes)
        if (faqRes?.data?.categoryData) {
          setCategoryList(faqRes.data?.categoryData);
          // setDefaultTab(faqRes?.data?.categoryData[0].id);
        }
        if (faqRes?.data?.faqData) {
          setFaqs(faqRes.data?.faqData);
        }
      };
    useEffect(() => {
      if (loading) {
        getFaqList();
        setLoading(false)
      }
    }, [loading]);

  return (
    <>
      <section className="sec sec-form">
        <Container>
          <div className="artist-card">
            <Image src={mike} alt="Mike" className="artist-card-element mike" />
            <Image
              src={tabla}
              alt="Tabla"
              className="artist-card-element tabla"
            />
            <Image
              src={guitar}
              alt="Guitar"
              className="artist-card-element guitar"
            />
            <div className="sec-head text-center">
              <h2 className="sec-title mb-md-5 mb-4">
                Artist-friendly <br />
                participation rules
              </h2>
              <a
                href={guidelines}
                target="_blank"
                className="btn btn-lg btn-primary rounded-pill"
              >
                <span>
                  <Image src={arrowDown} alt="" /> Download full guidelines
                </span>
              </a>
            </div>
          </div>

          <section className="sec pb-0" id="FAQs">
            <Row className="justify-content-center">
              <Col lg={10}>
                <h2 className="text-center fw-medium mb-md-5 mb-3">
                  Got Questions? We’ve Got Answers
                </h2>
                <Tabs defaultActiveKey={1} className="mb-3 justify-content-md-center" >
                  {categoryList.map((category, i) => (                  
                    <Tab key={i} eventKey={category.id} title={category.name}>
                      <Accordion>
                    <>
                    {faqs.map((faq, index) => ( 

                      (faq.categoryId == category.id)?
                      <>
                        <Accordion.Item eventKey={faq.id}>
                          <Accordion.Header>
                            {faq.orderNumber}. {faq.quest}
                          </Accordion.Header>
                          <Accordion.Body >
                            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                          </Accordion.Body>
                        </Accordion.Item>
                      </>:''
                    ))}
                    </>
                    </Accordion>
                    </Tab>
                  ))}
                </Tabs>
              </Col>
            </Row>
          </section>
        </Container>
      </section>
    </>
  );
}

export default FAQs;
