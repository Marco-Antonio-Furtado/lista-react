import React from "react";
import '../styles/AddTask.css'
import Button from "./Button";

function AddTask(){
    return (
        <div className="Add-Task-Container">
            <input className="Add-Task"/>
            <div className="Button-Save">
                <Button>Ugabuga</Button>
            </div>
        </div>
    )
}

export default AddTask