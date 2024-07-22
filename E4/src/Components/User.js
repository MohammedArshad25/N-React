import { useState } from "react";

const User =  ({name, role, location}) => {

    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(2);
    return (
        <div className="user-wrapper">
            <h2>{name}</h2>
            <h2>{role}</h2>
            <h3>{location}</h3>
            <p>count1 : {count}</p>
            <p>count2 : {count2}</p>
        </div>
    );
};

export default User;
