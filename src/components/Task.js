import '../styles/task.css'

function Task({ task }){
    return(
        <div className="task-container"
        style={task.completed ? { borderLeft: "6px solid chartreuse" }: {}}
        >
            <p className="task">{task.title}</p>
        </div>
    )
}

export default Task