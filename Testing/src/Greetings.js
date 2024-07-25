import { useState } from "react";

const Greetings = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true)
    }


    return(
        <div>
            <h1>Hello World</h1>
            <p>this is my first test case</p>

            {!clicked && <p>you didn't click the button yet</p>}
            {clicked && <p> clicked</p>}
            <button onClick={handleClick}>click me!</button>
        </div>
    );
}


export default Greetings;
