import { useState } from 'react';
import './styles/App.css';
import Tasks from './components/Tasks'
import AddTask from  './components/AddTask'


function App() {
  const [tasks, setTasks] = useState ([
    {
      id:1,
      title:"study english",
      isCompleted: true,
    },
    {
      id:2,
      title:"Get rid of the washroom's door fungus",
      isCompleted: false,
    },
  ])
  
  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [...tasks, {
      title: taskTitle,
      id: Math.random(10),
      isCompleted: false,
    }]
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <h1>To do list</h1>
      <AddTask handleTaskAddition={handleTaskAddition}/>
      
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
