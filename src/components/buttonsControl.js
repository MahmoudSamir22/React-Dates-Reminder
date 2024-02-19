import { Col, Row } from "react-bootstrap";

const ButtosControl = (props) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button className="btn-style py-2" onClick={props.deleteData}>
          مسح الكل
        </button>
        <button className="btn-style py-2" onClick={props.viewData}>
          عرض البيانات
        </button>
      </Col>
    </Row>
  );
};

export default ButtosControl;
