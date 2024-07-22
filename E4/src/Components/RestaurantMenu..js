import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

import { MENU_DATA } from "../../utils/Menu_data";

const RestaurantMenu = () => {


    const { resId } = useParams();

    const name = useRestaurantMenu(resId);
    const [menuCategories, setMenuCategories] = useState([]);

    const [showIndex, setShowIndex] = useState(0);

    const listCategories = () => {
        let menuarray= []
        {for (let category in MENU_DATA) {
            menuarray.push(category);
        }};
        setMenuCategories(menuarray);
    }

    useEffect(()=>{
        listCategories();
    }, []);

    return (
        <div className="menu-list-wrapper">
            <h1>Welcome to {name}</h1>
            {
                menuCategories.map((category, index)=> {
                        return <MenuCategory  title={category} data={MENU_DATA[category]} key={index}
                            show={ index === showIndex? true : false}
                            handleShowIndex = {()=> {setShowIndex(index) }}
                        />
                })
            }
        </div>
    )
}

export default RestaurantMenu;
