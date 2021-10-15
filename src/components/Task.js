import '../styles/task.css'

function Task({ task, handleTaskClick }){
    return(
        <div className="task-container"  onClick={() => handleTaskClick(task.id)}
        style={task.completed ? { borderLeft: "6px solid chartreuse" }: {}}
        >
                {task.title}
            
        </div>
    )
}

export default Task