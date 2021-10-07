import react from "react";
import Task from './Task'

function Tasks({ tasks }) {
    return (
      <div className="Tasks">
        {tasks.map((task, i) => (<Task key={i} task={task} />
        ))}
      </div>
    );
  }
  
  export default Tasks;

  