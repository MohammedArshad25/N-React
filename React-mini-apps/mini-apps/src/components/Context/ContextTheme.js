import React, {useContext} from "react";
import defineContext from "./defineContext";



const ContextTheme = ({handleToggle}) => {

    const {color, bgColor, btnColor} = useContext(defineContext);
    return <div style={{display: "flex", flexDirection: "column", alignItems : "center"}}>
        <h1>Context</h1>

        <div style={{display : "flex", padding: "16px" ,  backgroundColor: bgColor, color:color}}>
                <p>this is the theme toggler component via context api</p>
                <button style={{ margin: "10px",borderRadius: "4px", cursor:
                    "pointer", color:color, backgroundColor:btnColor, fontWeight: "bold"}}
                    onClick={handleToggle}>
                    toggle Theme
                </button>
        </div>
        </div>
};


export default ContextTheme;
