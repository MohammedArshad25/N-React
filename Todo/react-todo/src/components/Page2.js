import { useContext } from "react";
import AppContext from "../utils/AppContext";

const Page2 = () => {

    const { userName, setUName } = useContext(AppContext);
    return (
        <div>
            this is page 2 will be lazy loaded
            and is an example of context update

            <p>present Name is {userName}</p>
            <button onClick={()=>setUName("Updated Arshad")}>click to update context value</button>
        </div>
    )
}

export default Page2;
