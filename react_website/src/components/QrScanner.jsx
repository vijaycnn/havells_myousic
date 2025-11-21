import { Container, Image, Row, Col, Dropdown, Button } from "react-bootstrap";
import QrCode from "../assets/QR-code.png";

import shareIcon from "../assets/share-icon.svg";

function QrScanner() {
  const handleShare = async () => {
    const artistUrl = "https://havellsmyousic.com/participate";
    const artistName = "Artist Participate";

    if (navigator.share) {
      try {
        await navigator.share({
          title: artistName,
          text: `Get Ready to ${artistName}`,
          url: artistUrl,
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      const fallbackText = `Get Ready to ${artistName} - ${artistUrl}`;
      try {
        await navigator.clipboard.writeText(fallbackText);
        alert("Share link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy to clipboard:", err);
        alert(
          "Could not share the content, please copy the link manually: " +
            artistUrl
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
                    <Dropdown.Item href="https://web.whatsapp.com/send?text=https://havellsmyousic.com/participate">
                      WhatsApp
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.facebook.com/sharer/sharer.php?u=https://havellsmyousic.com/participate">
                      Facebook
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.linkedin.com/shareArticle?mini=true&url=https://havellsmyousic.com/participate">
                      Linkedin
                    </Dropdown.Item>
                    <Dropdown.Item href="https://twitter.com/intent/tweet?via=havellsindia&text=Checkout%20this%20product&url=https://havellsmyousic.com/participate">
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
