import '../assets/App.css';
import React, {Component} from 'react';
import Task from "./Task";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {label: "Aller boire une bière"},
        {label: "Faire le ménage"}
      ],
    }
  }

  handleSubmitAddTask = (event) => {
    event.preventDefault();
    const labelNewTask = event.target.elements.taskname.value;

    this.setState({tasks: [...this.state.tasks, {label: labelNewTask}]});
  }

  render() {
    return (
        <div className="container">
          <form onSubmit={
            (e) => {
              this.handleSubmitAddTask(e);
            }
          }>
            <label htmlFor="taskname" className="form-label">
              Task name:
              <input type="text" id="taskname" className="form-control" />
            </label>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>

          {this.state.tasks.map((task, index) => <Task key={index} label={task.label} />)}
        </div>
    );
  }
}

export default App;
