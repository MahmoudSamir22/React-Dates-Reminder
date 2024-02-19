const Appointment = (props) => {
  return (
    <div className="d-flex border-bottom mx-3">
      <img src={props.avatar} className="img-avatar" alt="avatar" />
      <div className="px-3">
        <p className="d-inline fs-5">{props.name}</p>
        <p className="fs-6">{props.time}</p>
      </div>
    </div>
  );
};

export default Appointment;
