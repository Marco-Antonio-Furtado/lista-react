import { useState } from 'react';
import './styles/App.css';
import Tasks from './components/Tasks'
import AddTask from  './components/AddTask'
import { v4 as uuidv4 } from 'uuid'


function App() {
  const [tasks, setTasks] = useState ([
    {
      id:uuidv4(),
      title:"study english",
      completed: true,
    },
    {
      id:uuidv4(),
      title:"Get rid of the washroom's door fungus",
      completed: false,
    },
  ])
  
  const handleTaskAddition = (taskTitle) =>{
    if (taskTitle === '') {alert("Please fill the required inputs")} 
    else{
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]
    setTasks(newTasks)
  }}

  const handleTaskClick = (taskId) =>{
    const newTasks = tasks.map(task =>{
    if(task.id === taskId) return {...task, completed: !task.completed}
    return task
    }) 
    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {}

  return (
    <div className="App">
      <h1>To do list</h1>
      <AddTask handleTaskAddition={handleTaskAddition} />
      
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
    </div>
  );
}

export default App;
