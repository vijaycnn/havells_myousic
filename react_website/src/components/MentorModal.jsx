import { Modal, Button, Image, Row, Col } from "react-bootstrap";

const MentorModal = ({ show, handleClose, mentor }) => {
  if (!mentor) return null;

  return (
    <Modal size="xl" show={show} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{mentor.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-5 align-items-center text-large">
          <Col lg={4} className="text-center mb-lg-0 mb-5 ">
            <Image src={mentor.image} alt={mentor.name} />
          </Col>
          <Col lg={8}>
            <div dangerouslySetInnerHTML={{ __html: mentor.desc }} />
          </Col>
        </Row>

        {/* HTML overview content */}
        <div dangerouslySetInnerHTML={{ __html: mentor.overview }} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MentorModal;
