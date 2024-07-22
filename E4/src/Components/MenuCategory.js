import { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({data, title, handleShowIndex, show, listIndex}) => {

    const handleClick = () => {
            handleShowIndex();

    }
    return (
        <div className="menu-category-wrapper">
            <div  onClick={handleClick} className="menu-category-head">
            <h2 className="menu-category-title">{title}
            </h2>
            <img src="https://cdn-icons-png.flaticon.com/512/60/60995.png"  className="img-icon" />
            </div>

            {data.map((array, index) => { return show && <ItemList info = {array.card.info} key={array.card.info.id}/>

            })}
        </div>
    )
}

export default MenuCategory;
