import { Col, Row } from "react-bootstrap";

const DatesCount = ({people}) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="">
        لديك {people.length} مواعيد اليوم
      </Col>
    </Row>
  );
};

export default DatesCount;
