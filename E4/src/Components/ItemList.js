import { CARD_IMG_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemList = (props) => {
    const { name, price, id, defaultPrice, imageId, description } = props.info;

    const dispatch = useDispatch();

    const handleAddItem = ( item ) => {
        console.log(item);
        dispatch(addItem(item))
    }

    return (
        <div className="menu-list-item-wrapper">
            <div className="menu-list-item-content text-left">
            <p className="menu-list-item-title">{name} </p>
            <span className="text-left"> ₹ {price ? price/ 100 : defaultPrice/ 100}</span>
            <p className="text-left">{description}</p>
            <button className="add-item-btn" onClick={() => {handleAddItem(props)}}>Add item</button>
            </div>

            <img className="menu-img" src={CARD_IMG_URL + imageId}/>
        </div>
    )
}

export default ItemList;
