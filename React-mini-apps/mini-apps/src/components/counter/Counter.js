import React, {useState} from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1)

    const handleIncrement = () => {
        setCount(count + step);
    }

    const handleDecrement = () => {
        setCount(count - step);
    }


    const handleStep = (e) => {
        setStep(Number(e.target.value))
    }



return <div style={{display: "flex", flexDirection: "column", alignItems : "center"}}>
    <h1 >Counter</h1>
    <input type="number" value={count}/>

    <div style={{display: "flex", marginTop: "10px"}}>
    <button style={{display: "flex", margin: "10px", cursor: "pointer"}}
    onClick={handleDecrement}>-</button>

    <button style={{display: "flex", margin: "10px", cursor: "pointer"}}
    onClick={handleIncrement}>
    +</button>
    </div>

    <div style={{display: "flex", marginBottom: "10px", flexDirection: "column"}}>
        <p>Increment by </p>
        <input type="number" onChange={handleStep} value={step}/>
    </div>

    <button style={{display: "flex", margin: "10px", cursor: "pointer"}}>Reset</button>
    </div>
}

export default Counter;
