import React, { useState } from "react";
import '../styles/AddTask.css'
import Button from "./Button";

function AddTask({ handleTaskAddition }){
    const [inputData, setInputData] = useState('')
    const handleInputData = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    const handleEnter = (e) => {
        if (e.keyCode !== 13) return

        handleAddTaskClick()
    }
    

    return (
        <div className="Add-Task-Container">
            <input onKeyUp={handleEnter} 
            onChange={handleInputData} 
            className="Add-Task"
            value={inputData}/>

            <div className="Button-Save">
                <Button onClick={handleAddTaskClick}>Ugabuga</Button>
            </div>
        </div>
    )
}

export default AddTask