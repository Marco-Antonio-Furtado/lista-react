import '../styles/task.css'

function Task({ task, handleTaskClick, handleTaskDeletion }){
    return(
        <div className="task-container"  
        style={task.completed ? { borderLeft: "6px solid chartreuse" }: {}}
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>    

            <div>
                <button className="btn-deletar" onClick={() => handleTaskDeletion(task.id)}>x</button>
            </div>

        </div>
    )
}

export default Task