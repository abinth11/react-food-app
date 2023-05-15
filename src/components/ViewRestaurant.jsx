import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import RestaurantMenu from "./RestaurantMenu";
import useFetchRestaurantMenu from "../Hooks/useFetchRestaurantMenu";
const ViewRestaurant = () => {
    const { resId } = useParams()
    const [restaurant, menu, menuTitle, menuItems, isLoading, isError, error] = useFetchRestaurantMenu(resId)
    return (
        <div className="view-restaurant">
            <p className="rest-url">Home / {restaurant?.city} / {restaurant?.areaName} / {restaurant?.name}</p>
            <div className="restaurant-details">
                {/* <img className="main-img" src={`${restaurantImageUrl}/${restaurant?.cloudinaryImageId}`} alt="restaurant" /> */}
                <h2>{restaurant?.name}</h2>
                <p style={{ paddingTop: '0px' }}>{restaurant?.cuisines?.join(', ')}</p>
                <p>{restaurant?.areaName}, {restaurant?.sla?.lastMileTravelString} </p>
                <p>{restaurant?.feeDetails?.message}</p>
                <button className="rating-button">
                    <span className="s-rating"><FaStar style={{ marginRight: '5px' }} />{restaurant?.avgRating}</span>
                    <hr />
                    <span>{restaurant?.totalRatingsString}</span>
                </button>
                <hr className="doted-hr" />

                <div className="restaurant-menu">
                    <h3>{menuTitle}({menuItems})</h3>
                    {
                        menu?.map((item) => {
                            return (
                                <div className="menu-item" key={item?.card?.info?.id}>
                                    <RestaurantMenu menuItem={item?.card?.info} />
                                    <hr className="doted-hr" />
                                </div>)
                        })
                    }
                </div>
            </div>

        </div>
    )
}
export default ViewRestaurant