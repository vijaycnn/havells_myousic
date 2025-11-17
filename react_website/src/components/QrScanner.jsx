import { Container, Image, Row, Col, Dropdown, Button } from "react-bootstrap";
// import QrCode from "../assets/QR-code.png";
import QrCode from "../assets/uat-QR-code.png";

import shareIcon from "../assets/share-icon.svg";

function QrScanner() {
  const handleShare = async () => {
    const productUrl =
      "https://havells.com/meditate-ap-250-air-purifier-ghrapmae50.html";
    const productName = "Meditate AP 250 Air Purifier";

    if (navigator.share) {
      try {
        await navigator.share({
          title: productName,
          text: `Check out this amazing product: ${productName}`,
          url: productUrl,
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      const fallbackText = `Check out this amazing product: ${productName} - ${productUrl}`;
      try {
        await navigator.clipboard.writeText(fallbackText);
        alert("Share link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy to clipboard:", err);
        alert(
          "Could not share the content, please copy the link manually: " +
            productUrl
        );
      }
    }
  };
  return (
    <>
      <section className="sec sec-qr p-0">
        <Container>
          <div className="rounded-5 p-5 card-qr">
            <Row className="align-items-center">
              <Col md={6} className="sec-head">
                <h2 className="sec-title m-0">
                  Scan and Participate to <br />
                  Showcase Your Talent!
                </h2>
              </Col>
              <Col md={2} className="text-center">
                <Image src={QrCode} className="qr-code" alt="" />
                <p>Scan to Participate</p>
              </Col>
              <Col md={4}>
                <p className="text-large fw-medium">
                  Sing, Write, or Compose - Participate Now or Share This QR
                  with a Friend.
                </p>
                <Dropdown className="d-lg-flex d-none">
                  <Dropdown.Toggle variant="primary rounded-pill">
                    <span>
                      <Image src={shareIcon} alt="" /> Share the QR
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://web.whatsapp.com/send?text=https://havells.com/">
                      WhatsApp
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.facebook.com/sharer/sharer.php?u=https://havells.com/">
                      Facebook
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.linkedin.com/shareArticle?mini=true&url=https://havells.com/">
                      Linkedin
                    </Dropdown.Item>
                    <Dropdown.Item href="https://twitter.com/intent/tweet?via=havellsindia&text=Checkout%20this%20product&url=https://havells.com/">
                      Twitter
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="d-lg-none">
                  <Button onClick={handleShare} variant="primary rounded-pill">
                    <span>
                      <Image src={shareIcon} alt="" /> Share the QR
                    </span>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default QrScanner;
