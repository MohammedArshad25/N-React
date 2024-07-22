import React from 'react'
import UserContext from "../../utils/UserContext";
import { useContext } from "react";

const Grocery = () => {
  const { userName } = useContext(UserContext);
  return (
    <div>Grocery are avaialble in our store and this a lazily loaded page
      <span>{userName}</span>
    </div>

  )
};

export default Grocery;
