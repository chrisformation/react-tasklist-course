import {Button} from 'react-bootstrap';

const Task = (props) => {
  return (
      <section>
        <h2>{props.label}</h2>
        <button className="btn btn-warning">Validate</button>
      </section>
  );
}

export default Task;