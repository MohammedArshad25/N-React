import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    useEffect (() => {
        fetchMenu();
        }, []);

        const [name, setName] = useState("");


        // console.log(resId);

  const fetchMenu = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId );
        // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=400157
        // https://www.swiggy.com/city/hyderabad/the-belgian-waffle-co-somi-reddy-nagar-attapur-rest400157

        // console.log("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+ {resId})
        let jsonData = await data.json();
        setName(jsonData.data.cards[0].card.card.text)
        // console.log(jsonData.data.cards[0].card.card.text)
    }


    return name;
};


export default useRestaurantMenu;
