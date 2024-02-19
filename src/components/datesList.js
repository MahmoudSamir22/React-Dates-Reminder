import { Col, Row } from "react-bootstrap";
import Appointment from "./appointment";

const DatesList = ({ people }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="rectangle p-2">
          {people.length ? (
            people.map((person) => {
              return (
                <Appointment
                  key={person.id}
                  avatar={person.avatar}
                  name={person.name}
                  time={person.time}
                />
              );
            })
          ) : (
            <h2 className="p-5 text-center">لا يوجد مواعيد اليوم</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;
