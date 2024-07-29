import { useRef, useState } from "react";


const UseRefHook = () => {

    const [count, setCount] = useState(0);
    const countref = useRef(0);

    const InputRef = useRef();

    // console.log(InputRef.current.focus());



    const handleClick = () => {
        setCount(count+1);
        countref.current++;

        console.log(countref.current);
    }



    return(
        <div>
            <h1>Use Ref Example</h1>
            <p>count : {count}</p>
            <button onClick={handleClick}>Increment</button>
            <input type="text" ref={InputRef}/>
        </div>
    )
}

export default UseRefHook;
