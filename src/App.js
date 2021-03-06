import { useState } from "react";
import "./styles/App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [error, setError] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "study english",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Take the dog for a walk",
      completed: false,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    setError(false);
    if (taskTitle === "") {
      setError(true);
      return;
    }

    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To do list</h1>
      <AddTask handleTaskAddition={handleTaskAddition} error={error} />

      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
      />
    </div>
  );
}

export default App;
