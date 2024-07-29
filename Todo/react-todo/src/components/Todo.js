import {useState} from "react";
import Task from './Task';

const Todo = () => {

    const [inputText, setInputText] = useState("");
    const [ todoList, setTodoList] = useState([]);

    const handleClick = () => {
        let newTodoList = [...todoList, inputText];
        setTodoList(newTodoList);
    }

    const deletetask = (deleteindex) => {
        let newTodoList = [...todoList];
        let updated = newTodoList.filter((todoindex, index) => {
            if(index == deleteindex){
                return;
            }
            else{
                return todoindex
            }
        })
        setTodoList(updated);

    }

    return ( <div>

        <div className="header">
            <input type="text" max-length="50" onChange={(e)=>{
                    setInputText(e.target.value)}} value={inputText}/>
            <button className="button" onClick={handleClick}>add todo</button>
        </div>

        <div className="todo-list-container">
                {
                    todoList.map((task, index) => {return <Task key={index} delTask={()=>deletetask(index)} text={task} />})
                }
        </div>
    </div>)
}

export default Todo;
