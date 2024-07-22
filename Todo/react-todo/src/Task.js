import {useState} from "react";


const Task = ({text, delTask}) => {
    return ( <div className="task-container">
        <input type="checkbox" />
        <p>{text}</p>
        <img  onClick={delTask} src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" />
        </div>)
}

export default Task;
