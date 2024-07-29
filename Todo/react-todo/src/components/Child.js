

const Child = ( {handleClick}) => {
    return (
        <div style={{display: "block", }}>
            <button onClick={()=>handleClick("final")}>click</button>
        </div>
    )
}

export default Child;
