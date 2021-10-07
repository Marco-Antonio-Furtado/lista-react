import react from 'react'
import { useState } from 'react';
import './styles/App.css';
import Tasks from './components/Tasks'
import AddTask from  './components/AddTask'
import Button from './components/Button';


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
  
  return (
    <div className="App">
      <h1>To do list</h1>
      <AddTask/>
      
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
