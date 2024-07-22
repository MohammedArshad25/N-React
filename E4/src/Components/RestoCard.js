import { CARD_IMG_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";

const RestoCard = (props) => {

    const {restoData} = props;

    const { userName } = useContext(UserContext);

    const {name, cloudinaryImageId, avgRatingString, cuisines, costForTwo} = restoData.info
  return (
    <div className="resto-card flex flex-col items-start bg-gray-100 text-left border-2 border-black-100 rounded-lg p-8" dir="ltr">
    <img className="resto-img rounded-lg pt-8 mb-4 w-64 h-64" src={CARD_IMG_URL + cloudinaryImageId} />
    <div className="w-60">
      <h3 className="resto-title text-left text-lg font-bold">{name}</h3>
      <p className="resto-desc  ">{cuisines.join(", ")}</p>
      <h4 className="font-bold flex items-center ">{avgRatingString}<img className="w-5" src="https://i.pinimg.com/474x/71/f9/73/71f973252da4f119388c55f5ec85f439.jpg"/></h4>
      <h4 className="pb-4">{costForTwo}</h4>
    </div>

    {/* <p>{userName}</p> */}
  </div>
  );
}


export const withPromotedLabel = (RestoCard) => {
  return (props) => {
      return (
        <div className="" >
            <label className="promoted-label relative  bg-black text-white py-1 px-2 text-xs top-12 left-4 ml-5 border border-black rounded">Promoted</label>
            <RestoCard {...props}/>
        </div>
      )
  }
}

  export default RestoCard;
