import React, {useState, useRef, useEffect} from 'react'

const Todo = () => {

    const [task, setTask] = useState("");

    const [taskList, setTaskList] = useState([]);

    const [isEdit, setIsEdit] = useState();

    useEffect(()=> {
        inputRef.current.focus();
    }, [])

    const handleInput = (e) => {
        setTask(e.target.value);
    }

    const handleAddTodo = () => {
        if(isEdit >=0) {
            let updatedTaskList = [...taskList];
            updatedTaskList[isEdit] = task;
            setTaskList(updatedTaskList);
            setIsEdit()
        } else {
            setTaskList([...taskList, task]);
        }
        setTask("");

    }

    const clearInputField = () => {
        setTask("");
    }

    const handleDelete = (index) => {
        let currentTaskList = [...taskList];
        currentTaskList.splice(index, 1)
        setTaskList(currentTaskList);
    }

    const editTask = (index) => {
        let currentTaskList = [...taskList];
        setTask(currentTaskList[index]);
        inputRef.current.focus();
        setIsEdit(index)

    }

    const inputRef = useRef(null);

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems : "center"}}>
        <input type="text" ref={inputRef} onChange={handleInput} value={task} placeholder="enter a todo here" onKeyDown={(e)=> {
            if(e.key === "Enter") {
                handleAddTodo()
            }
        }}/>
        <div style={{display: "flex", alignItems : "center"}}>
        <button onClick={handleAddTodo}  style={{display: "flex", margin: "5px", cursor: "pointer"}}>
        Add
        </button>
        <button onClick={clearInputField}  style={{display: "flex", margin: "5px", cursor: "pointer"}}>
        clear
        </button>
        </div>

        {taskList &&
           <ul>
            {taskList.map((ele, index) => <li key={index} style={{display: "flex", alignItems : "center"}}>{ele}
                <span ><img style={{width: "16px", height:"16px", padding:"8px", cursor:"pointer"}}
                        onClick={()=>editTask(index)}
                        src="https://cdn-icons-png.flaticon.com/512/200/200389.png"/></span>
                <span ><img style={{width: "16px", height:"16px", cursor:"pointer"}}
                        onClick={()=>handleDelete(index)}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7o467Nj8iApD9OFCmcTlBhbK1JBGvS7k3Q&s"/></span>
                </li>)}
           </ul>}


    </div>
  )
}

export default Todo;
