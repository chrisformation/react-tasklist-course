import {Button} from 'react-bootstrap';

const Task = (props) => {
  return (
      <section className="d-flex mb-4 mt-4 justify-content-between border-bottom border-primary">
        <h2>{props.label}</h2>
        <div>
          <button className="btn btn-primary ms-3">Validate</button>
          <button className="btn btn-danger ms-3">Delete</button>
        </div>
      </section>
  );
}

export default Task;