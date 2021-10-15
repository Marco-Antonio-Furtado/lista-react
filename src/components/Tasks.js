import Task from './Task'

function Tasks({ tasks, handleTaskClick }) {
    return (
      <div className="Tasks">
        {tasks.map((task, id) => (<Task handleTaskClick={handleTaskClick} key={id} task={task} />
        ))}
      </div>
    );
  }
  
  export default Tasks;

  