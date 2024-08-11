import React from 'react';
import useColor from './useColor';

const ColorTask = () => {

    const [color, changeColor]=useColor('');

    const handleChange = (e) => {
        let newColor = e.target.value;
        console.log(changeColor);
        changeColor(newColor);
    }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems : "center"}}>
        <p>ColorTask</p>
        <button onClick={handleChange} style={{display: "flex", margin: "10px", cursor: "pointer"}} value="red">Red</button>
        <button onClick={handleChange} style={{display: "flex", margin: "10px", cursor: "pointer"}} value="yellow">yellow</button>
        <button onClick={handleChange} style={{display: "flex", margin: "10px", cursor: "pointer"}} value="green">green</button>
        <div style={{display: "flex", margin: "10px",width:"100px",height:"100px", backgroundColor:color,  border:"2px solid black",  cursor: "pointer"}}>

        </div>
    </div>  )
}


export default ColorTask;
