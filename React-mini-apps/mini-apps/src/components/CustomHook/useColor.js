import React,{ useState }  from "react";


const useColor = () => {
    const [color, setColor] = useState("pink");

    const changeColor = (newColor) => {
        setColor(newColor);
    }

  return [color, changeColor];
}

export default useColor;
