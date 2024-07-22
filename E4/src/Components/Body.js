import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestoCard, { withPromotedLabel} from "./RestoCard";
import Shimmer from "./Shimmer";
import UserContext from "../../utils/UserContext";
// import { resList } from "../../utils/foodData";

const Body = () => {

    let [restaurantList, setRestaurantList] = useState([]);
    let [filteredRestuarantList, setfilteredRestuarantList] = useState([]);
    const [search, setSearch] = useState("");

    const { setUName, userName } = useContext(UserContext);

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        let json = await data.json();
        setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setfilteredRestuarantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const EnhancedRestoCard = withPromotedLabel(RestoCard);

    if(restaurantList.length === 0 ) {
        return <Shimmer />
    }
    return (
        <div>
            <div className="toggle-btn-container flex justify-between items-center px-8 mt-4">
                <button className="toggle-btn bg-green-100 hover:bg-green-200 text-black py-2 px-4 border border-green-700 rounded" onClick={()=> {
                    let filteredRestauants = restaurantList.filter((item)=> {
                        return item.info.avgRating >= 4.2;
                    });
                    console.log(filteredRestauants);
                    setfilteredRestuarantList(filteredRestauants);
                }}>
                    Top Rated Restaurants
                </button>

                <div>
                <input type="text" className="bg-gray-50 border border-gray-300 px-1"value={search} onChange={(e)=> {
                        setSearch(e.target.value);
                }}/>
                <button  className="bg-green-100 hover:bg-green-200 text-black ml-4 py-2 px-4 border border-green-700 rounded" onClick={()=> {
                    let searchedList = restaurantList.filter((item)=> {
                        return item.info.name.toLowerCase().includes(search.toLowerCase())
                    });

                    setfilteredRestuarantList(searchedList);
                }}>Search</button>
                </div>


                <div className="flex items-center" >
                    <p className="pr-4 font-bold ">conetxt api example: </p>
                    <input type="text" className="bg-gray-50 border border-gray-300 px-1" onChange={(e)=> {
                        setUName(e.target.value)
                    }} value={userName}/>
                </div>

            </div>
            <div className="body-wrapper flex items-center flex-wrap justify-around">
                {filteredRestuarantList.map((restoData, index) => {
                return(
                    <Link to={"/restaurants/"+ restoData.info.id } key={restoData.info.id}>

                    {(restoData.info.avgRating > 4.0) ?
                        <EnhancedRestoCard restoData={restoData} key={restoData.info.id} />
                        :<RestoCard restoData={restoData} key={restoData.info.id}/>}
                </Link>

                )
                })
                }
            </div>
        </div>

    );


    }

    export default Body;
