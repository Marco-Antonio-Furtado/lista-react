import react from "react";
import '../styles/task.css'

function Task({ task }){
    return(
        <div className="task-container">
            <p className="task">{task.title}</p>
        </div>
    )
}

export default Task