import {
  Container,
  Form,
  Badge,
  Row,
  Col,
  Button,
  Table,
} from "react-bootstrap";
import { BiPencil } from "react-icons/bi";

function Participate() {
  return (
    <>
      <h1 className="h4 mb-4 font-secondary fw-medium">Participant</h1>

      <div className="table-view bg-white rounded-4 p-4">
        <Table className="align-middle">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Dummy</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, enim.
              </td>
              <td>
                <Badge bg="success">Active</Badge>
              </td>
              <td>
                <Button variant="default btn-icon">
                  <BiPencil />
                </Button>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Dummy</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, enim.
              </td>
              <td>
                <Badge bg="success">Active</Badge>
              </td>
              <td>
                <Button variant="default btn-icon">
                  <BiPencil />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Participate;
