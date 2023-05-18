import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import RestaurantMenu from "./RestaurantMenu";
import useFetchRestaurantMenu from "../Hooks/useFetchRestaurantMenu";
const ViewRestaurant = () => {
    const { resId } = useParams()
    const [restaurant, menu, menuTitle, menuItems, isLoading, isError, error] = useFetchRestaurantMenu(resId)
    return (
        isLoading ?
            <h3 className="mt-20  pt-5">Loading</h3>
            :
            <div className="mt-20 p-5 ml-52">
                <p className="font-thin">Home / {restaurant?.city} / {restaurant?.areaName} / {restaurant?.name}</p>
                <div className="mt-10">
                    {/* <img className="main-img" src={`${restaurantImageUrl}/${restaurant?.cloudinaryImageId}`} alt="restaurant" /> */}
                    <h2 className="text-xl">{restaurant?.name}</h2>
                    <p className="mt-3">{restaurant?.cuisines?.join(', ')}</p>
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