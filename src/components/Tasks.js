import Task from "./Task";

function Tasks({ tasks, handleTaskClick, handleTaskDeletion }) {
  return (
    <div className="Tasks">
      {tasks.map((task, id) => (
        <Task
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
          key={id}
          task={task}
        />
      ))}
    </div>
  );
}

export default Tasks;
