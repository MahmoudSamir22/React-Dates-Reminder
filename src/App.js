import { Container } from "react-bootstrap";
import { people } from "./data";
import DatesCount from "./components/datesCount";
import DatesList from "./components/datesList";
import ButtosControl from "./components/buttonsControl";
import { useState } from "react";
function App() {
  const [personData, setPersonState] = useState([]);
  const onDelete = () => {
    setPersonState([]);
  };
  const onView = () => {
    setPersonState(people);
  };
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount people={personData} />
        <DatesList people={personData} />
        <ButtosControl deleteData={onDelete} viewData={onView} />
      </Container>
    </div>
  );
}

export default App;
