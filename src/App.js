import { useState } from 'react';
import './styles/App.css';
import Tasks from './components/Tasks'
import AddTask from  './components/AddTask'
import { v4 as uuidv4 } from 'uuid'


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
    if (taskTitle === '') {alert("Preencha alguma coisa")} 
    else{
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      isCompleted: false,
    }]
    setTasks(newTasks)
  }}

  return (
    <div className="App">
      <h1>To do list</h1>
      <AddTask handleTaskAddition={handleTaskAddition}/>
      
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
